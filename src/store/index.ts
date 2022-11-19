import axios from "axios";
import { createStore } from "vuex";

enum sortTypes {
  ASC = "asc",
  DESC = "desc",
}

interface requestPDO {
  _page?: number;
  _sort?: string;
  _order?: sortTypes;
  _limit?: number;
  filter?: Record<string, number | string>;
}

interface Launch {
  id: string;
  slug: string;
  name: string;
  status: {
    id: number;
    name: string;
    abbrev: string;
    description: string;
  };
  last_updated: string;
  net: string;
  window_end: string;
  window_start: string;
  probability: number;
  holdreason: string;
  failreason: string;
  hashtag: string;
  pad: {
    id: number;
    agency_id: number;
    name: string;
    info_url: string;
    wiki_url: string;
    map_url: string;
    latitude: string;
    longitude: string;
    location: {
      id: number;
      name: string;
      country_code: string;
      total_launch_count: number;
      total_landing_count: number;
    };
    total_launch_count: number;
  };
  webcast_live: boolean;
  infographic: string;
}

interface ILocation {
  id: number;
  name: string;
  country_code: string;
  total_launch_count: number;
  total_landing_count: number;
}

export default createStore<{
  launches: Launch[];
  locations: ILocation[];
}>({
  state: {
    launches: [],
    locations: [],
  },
  getters: {},
  mutations: {
    setLaunches(state, payload: Launch[]) {
      state.launches = payload;
    },
    setLocations(state, payload: ILocation[]) {
      state.locations = payload;
    },
  },
  actions: {
    async getLaunchesByParams(ctx, params: requestPDO): Promise<void> {
      try {
        const { data }: { data: Launch[] } = await axios.get(
          "https://space-api.gset.pl/launches",
          {
            params,
          }
        );
        ctx.commit("setLaunches", data);
      } catch (error) {
        console.log(error);
      }
    },
    async getLocations(ctx): Promise<void> {
      try {
        const { data }: { data: ILocation[] } = await axios.get(
          "https://space-api.gset.pl/locations"
        );
        ctx.commit("setLocations", data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
