<template>
  <section>
    <LoadingParticipationsList v-if="isFetching" />

    <BaseStub
      v-else-if="isError"
      title="Ошибка загрузки списка отчётов"
      :subtitle="String(error)"
    />

    <template v-else>
      <div class="filters">
        <ProjectFilterAccordion :opened="false">
          <template #title>
            <span v-if="isFetching" class="multiselect-spinner"> </span>
            <span>Статус проекта</span>
          </template>

          <template #content>
            <BaseCheckbox
              class="label"
              :model-value="deliveries"
              :value="ProjectReportStateId.Delivered"
              :onchange="(e: any) => {
                if (e.target.checked) {
                  if (!deliveries.includes(ProjectReportStateId.Delivered)) {
                    deliveries = [...deliveries, ProjectReportStateId.Delivered]
                  }
                } else {
                  if (deliveries.includes(ProjectReportStateId.Delivered)) {
                    deliveries = deliveries.filter(
                      (delivery) => delivery !== ProjectReportStateId.Delivered
                    )
                  }
                }
              }"
            >
              Сдано
            </BaseCheckbox>
            <BaseCheckbox
              class="label"
              :model-value="deliveries"
              :value="ProjectReportStateId.NotDelivered"
              :onchange="(e: any) => {
                if (e.target.checked) {
                  if (!deliveries.includes(ProjectReportStateId.NotDelivered)) {
                    deliveries = [...deliveries, ProjectReportStateId.NotDelivered]
                  }
                } else {
                  if (deliveries.includes(ProjectReportStateId.NotDelivered)) {
                    deliveries = deliveries.filter(
                      (delivery) => delivery !== ProjectReportStateId.NotDelivered
                    )
                  }
                }
              }"
            >
              Не сдано
            </BaseCheckbox>
          </template>
        </ProjectFilterAccordion>

        <BaseButton @click.prevent="handlerUploadReportToExcel">
          Выгрузить отчёт
        </BaseButton>
      </div>

      <BaseStub
        v-if="filteredProjectReportList?.length === 0"
        title="Отчёты на проекты не найдены :("
        subtitle="На данный момент Вам не отправили ни одного отчёта на проект"
      />

      <div v-else>
        <InstituteDirectorProjectReportCard
          v-for="projectReport in paginatedReports"
          :key="projectReport.id"
          :project-report="projectReport"
        />

        <BasePagination
          :page="currentPage"
          :total-items="filteredProjectReportList?.length || 0"
          :page-size="PAGE_SIZE"
          :pages-visible="PAGES_VISIBLE"
          @update:page="onPageChange"
        />
      </div>
    </template>
  </section>
</template>

<script setup lang="ts">
  import { computed, ref, watch } from 'vue';
  import { useRoute } from 'vue-router';
  import { useRouter } from 'vue-router';
  import * as xlsx from 'xlsx';
  import InstituteDirectorProjectReportCard from '@/components/project-report/InstituteDirectorProjectReportCard.vue';
  import BaseButton from '@/components/ui/BaseButton.vue';
  import BaseCheckbox from '@/components/ui/BaseCheckbox.vue';
  import BasePagination from '@/components/ui/BasePagination.vue';
  import BaseStub from '@/components/ui/BaseStub.vue';
  import ProjectFilterAccordion from '@/components/ui/accordion/ProjectFilterAccordion.vue';
  import { useGetInstituteProjectReportsQuery } from '@/api/InstituteDirectorApi/hooks/useGetInstituteProjectReportsQuery';
  import { usePaginatedList } from '@/hooks/usePaginatedList';
  import { RouteNames } from '@/router/types/route-names';
  import {
    FilterByToProjectReportNameId,
    FilterInstituteProjectReportsBy,
    toInstituteProjectReports,
  } from '@/router/utils/routes';
  import {
    ProjectReportNameId,
    ProjectReportStateId,
  } from '@/models/ProjectReport';
  import LoadingParticipationsList from './LoadingParticipationsList.vue';

  const router = useRouter();
  const route = useRoute();

  const deliveries = ref<ProjectReportStateId[]>([
    ProjectReportStateId.Delivered,
    ProjectReportStateId.NotDelivered,
  ]);

  const filterBy = computed<ProjectReportNameId | undefined>(() => {
    const filterBy = String(
      route.params.filterBy,
    ) as FilterInstituteProjectReportsBy;
    return FilterByToProjectReportNameId[filterBy] as ProjectReportNameId;
  });

  watch(
    () => filterBy.value,
    (currentFilterBy) => {
      if (route.name !== RouteNames.INST_DIRECTOR_PROJECTS_REPORTS) return;
      if (!currentFilterBy) router.replace(toInstituteProjectReports());
    },
    { immediate: true },
  );

  const {
    isFetching,
    isError,
    error,
    data: projectReportList,
  } = useGetInstituteProjectReportsQuery({
    select: (list) =>
      list.sort(
        (a, b) =>
          Number(Boolean(b.project_goal) && Boolean(b.project_review)) -
          Number(Boolean(a.project_goal) && Boolean(a.project_review)),
      ),
  });

  const filteredProjectReportList = computed(() =>
    projectReportList.value?.filter(
      (report) =>
        (report.department.institute.id === filterBy.value ||
          filterBy.value === ProjectReportNameId.All) &&
        ((Boolean(report.project_goal) &&
          Boolean(report.project_review) &&
          deliveries.value.includes(ProjectReportStateId.Delivered)) ||
          (!report.project_goal &&
            !report.project_review &&
            deliveries.value.includes(ProjectReportStateId.NotDelivered))),
    ),
  );

  const handlerUploadReportToExcel = (e: HTMLFormElement) => {
    const reports: {
      Название: string;
      Цель: string;
      'Дата начала': string;
      'Дата конца': string;
      Кафедра: string;
      Институт: string;
      Наставники: string;
    }[] = [];

    filteredProjectReportList.value?.forEach((report) => {
      if (!report.project_goal && !report.project_review) {
        reports.push({
          Название: report.title,
          Цель: report.goal,
          'Дата начала': report.date_start,
          'Дата конца': report.date_end,
          Кафедра: report.department.name,
          Институт: report.department.institute.name,
          Наставники: report.supervisors
            .map((supervisor) => supervisor.fio)
            .join(', '),
        });
      }
    });

    const workbook = xlsx.utils.book_new();
    const worksheet = xlsx.utils.json_to_sheet(reports);
    xlsx.utils.book_append_sheet(workbook, worksheet);
    xlsx.writeFile(workbook, 'Несданные отчёты.xlsx');
  };

  const PAGE_SIZE = 6;
  const PAGES_VISIBLE = 7;

  const currentPage = computed(() => Number(route.params.page) || 1);
  const paginatedReports = usePaginatedList(filteredProjectReportList, {
    pageSize: PAGE_SIZE,
    currentPage: currentPage,
  });

  function onPageChange(page: number) {
    router.push({
      ...route,
      params: { ...route.params, page },
    });
  }
</script>

<style lang="scss" scoped>
  .miltiselect:first-child {
    margin-bottom: 1.25rem;
  }

  .miltiselect:deep(.multiselect-clear) {
    display: none;
  }

  .filters {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 0.625rem;
    padding-bottom: 0.6875rem;
    margin-bottom: 15px;
    background: #fff;
    border: 1px solid var(--gray-color-1);
    border-radius: 0.625rem;

    & > *:nth-child(2) {
      height: fit-content;
      margin-right: 15px;
    }
  }

  .label:not(:last-child) {
    margin-bottom: 0.8125rem;
  }

  .footer {
    display: flex;
    flex-direction: column;
    gap: 0.6875rem;
    padding-right: 1.375rem;
    padding-left: 1.375rem;
    margin-top: 1.25rem;
  }
</style>
