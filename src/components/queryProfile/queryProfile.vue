<template>
  <a-drawer
    v-model:visible="is_open"
    :header-style="{ display: 'none' }"
    :body-style="{ padding: 0 }"
  >
    <a-page-header
      :title="$t('order.profile.work_id', { id: order.work_id })"
      :ghost="false"
    >
      <template #extra>
        <template v-if="order.status === 1">
          <a-button key="2" danger ghost @click="queryReject">{{
            $t('order.reject')
          }}</a-button>
          <a-button key="1" type="primary" @click="queryAgree">{{
            $t('order.agree')
          }}</a-button>
        </template>
      </template>
      <a-row type="flex" justify="center" align="middle">
        <a-col :span="16">
          <a-descriptions :column="2">
            <a-descriptions-item :label="$t('query.profile.username')"
              >{{ order.username }}
            </a-descriptions-item>
            <a-descriptions-item :label="$t('query.profile.realname')"
              >{{ order.real_name }}
            </a-descriptions-item>
            <a-descriptions-item :label="$t('query.profile.export')">{{
              order.export === 1 ? $t('common.yes') : $t('common.no')
            }}</a-descriptions-item>
            <a-descriptions-item :label="$t('query.profile.date')"
              >{{ order.date }}
            </a-descriptions-item>
            <a-descriptions-item :label="$t('query.profile.text')">
              <span>{{ order.text }}</span>
            </a-descriptions-item>
            <a-descriptions-item :label="$t('query.profile.approval')"
              >{{ order.approval_time }}
            </a-descriptions-item>
          </a-descriptions>
        </a-col>
        <a-col :span="8">
          <a-progress
            :percent="100"
            :stroke-width="5"
            :width="150"
            :stroke-color="StateQueryUsage(order.status).color"
            type="circle"
            style="position: relative"
          >
            <template #format>
              <span class="state_color">{{
                StateQueryUsage(order.status).title
              }}</span>
            </template>
          </a-progress>
        </a-col>
      </a-row>
      <a-tabs>
        <a-tab-pane key="1" :tab="$t('order.profile.profile')">
          <a-table
            bordered
            :columns="col"
            :data-source="tData"
            size="small"
            :pagination="false"
          ></a-table>
          <br />
          <a-pagination
            v-model:page-size="pagination.pageSize"
            v-model:current="pagination.current"
            :total="pagination.pageCount"
            :show-total="(total:number) => `共 ${total} 条`"
            @change="currentPage"
          />
        </a-tab-pane>
      </a-tabs>
    </a-page-header>
  </a-drawer>
</template>

<script lang="ts" setup>
  import {
    queryAgreeOrder,
    queryProfile,
    queryRejectOrder,
  } from '@/apis/query';
  import { ref } from 'vue';
  import { useI18n } from 'vue-i18n';
  import CommonMixins from '@/mixins/common';
  import { StateQueryUsage } from '@/lib';
  import { debounce } from 'lodash-es';

  interface QueryRef {
    work_id: string;
    username: string;
    date: string;
    text: string;
    assigned: string;
    real_name: string;
    export: number;
    status: number;
    approval_time: string;
  }

  const { t } = useI18n();

  const { pagination, is_open } = CommonMixins();

  const col = [
    {
      title: 'SQL',
      dataIndex: 'sql',
    },
    {
      title: t('common.table.source'),
      dataIndex: 'source',
    },
    {
      title: t('common.table.schema'),
      dataIndex: 'schema',
    },
    {
      title: t('common.table.time'),
      dataIndex: 'time',
    },
    {
      title: t('common.table.ex_time'),
      dataIndex: 'ex_time',
    },
  ];

  const tData = ref<QueryRef[]>([]);

  const order = ref<QueryRef>({} as QueryRef);

  const queryAgree = debounce(() => {
    queryAgreeOrder(order.value.work_id);
  }, 200);

  const queryReject = debounce(() => {
    queryRejectOrder(order.value.work_id);
  }, 200);

  const currentPage = async (page: number) => {
    const { data } = await queryProfile(order.value.work_id, page);
    tData.value = data.payload.data;
    pagination.pageCount = data.payload.page;
  };

  const profile = (vl: QueryRef) => {
    order.value = vl;
    is_open.value = true;
    currentPage(pagination.current);
  };

  defineExpose({
    profile,
  });
</script>
