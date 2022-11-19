<template>
  <div class="container">
    <div class="main">
      <div class="filter-form">
        <v-select taggable multiple push-tags v-model="selectedLocation" @option:selected="getLaunchesByLocation" :options="locations">
          <template v-slot:option="option">
            <div class="filter-dropdown__item">
              <input type="checkbox" :checked="isOptionSelected(option)">
              <span>
                {{ option.label }}
              </span>
            </div>
          </template>
        </v-select>
      </div>
      <div class="launches-list">
        <div class="launches-list_element" v-for="(launch, index) in launches" :key="index">
          <div class="launches-list_column">
            <div class="launches-list_img-container">
              <img src="/assets/rocket.svg" alt="rocket" />
            </div>
            <div class="launches-list_description">
              <h1>{{launch.name}}</h1>
              <p>{{launch.pad.name}}</p>
            </div>
          </div>
          <div class="launches-list_column">
            <div class="launches-list_description">
              <h2>{{ printDate(launch.window_start) }}</h2>
              <span>Launch date</span>
            </div>
          </div>
          <div class="launches-list_column">
            <div class="launches-list_description">
              <h2>{{ launch.pad.name }}</h2>
              <span>Location</span>
            </div>
          </div>
          <div class="launches-list_column">
            <div class="status">
              <p>{{ launch.status.name }}</p>
            </div>
          </div>
        </div>
      </div>
    <div class="pagination">
      <div class="pagination_item" ><img src="assets/chevron-left.svg" alt="chevron-left"></div>
      <div class="pagination_item active">1</div>
      <div class="pagination_item ">2</div>
      <div class="pagination_item ">3</div>
      <div class="pagination_item" ><img src="assets/chevron-right.svg" alt="chevron-right"></div>
    </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, computed, ref} from "vue";
import { useStore } from "vuex";
import ILocation from '@/store';
import moment from 'moment';

const store = useStore();
const selectedLocation = ref<{label: string; code: number}[]>([]);
const locations = computed(() => store.state.locations.map((location: { name: string; id: number; }) => {
  return {label: location.name, code: location.id};
}));

const launches = computed(() => store.state.launches);

const printDate = (date: string) => {
  return moment(date).format('DD MMM YYYY')
}
const getLaunchesByLocation = (locations: {label: string; code: number}[]) => {
  const params = new URLSearchParams();
  params.append('_limit', '10');
  locations.map((location) => {
    params.append('pad.location.id', JSON.stringify(location.code))
  })
  store.dispatch("getLaunchesByParams", params);
}

const isOptionSelected = (option: {label: string; code: number}) => {
  return !!selectedLocation.value.find((location) => location.code == option.code)
}

onMounted(() => {
  store.dispatch("getLaunchesByParams", {
    _limit: 10
  });
  store.dispatch("getLocations");
});


</script>

<style lang="scss">
.filter-dropdown{
  &__item {
    padding: 13px 0;
    display: flex;
    text-overflow: ellipsis;
    align-items: center;

    input {
      margin-right: 10px;
    }
    span {
      font-family: 'Nunito';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 14px;
      color: #2F3031;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
}
</style>