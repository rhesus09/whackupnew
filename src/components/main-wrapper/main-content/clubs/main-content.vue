<template>
  <section>
    <section class="vbox">
      <section class="scrollable padder-lg">
        <h2 class="font-thin m-b"><span v-for="genre in getSelected"> <span
          class="label label-info">{{genre.name}} </span> &nbsp; </span></h2>
        <div class="row row-sm">
          <div v-for="items in getItem" class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
            <div class="item">
              <div class="pos-rlt">
                <div class="item-overlay opacity r r-2x bg-black">
                  <div class="center text-center m-t-n">
                    <a href="#"><i class="fa fa-play-circle i-2x"></i></a>
                  </div>
                </div>
                <a href="track-detail.html"><img src="images/m1.jpg" alt="" class="r r-2x img-full"></a>
              </div>
              <div class="padder-v">
                <a href="track-detail.html" data-bjax data-target="#bjax-target" data-el="#bjax-el"
                   data-replace="true" class="text-ellipsis">{{items.name}}</a>
                <a href="track-detail.html" data-bjax data-target="#bjax-target" data-el="#bjax-el"
                   data-replace="true" class="text-ellipsis text-xs text-muted">{{items.name}}</a>
              </div>
            </div>
          </div>
        </div>
        <pagination></pagination>
      </section>
    </section>
    <router-view name="player"></router-view>
  </section>
</template>
<script>
//   import pagination from './pagination.vue'
  import _ from 'lodash'
  import * as types from '../../../../store/types'
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters({
        getSelected: types.GET_GENRE_LIST_SELECTED,
        getItemPerGenre: types.GET_CLUB_ITEM,
        getClubName: types.GET_CLUB_NAME
      }),
      getItem () {
        if (this.getSelected.length > 0) {
          return _.filter(this.getItemPerGenre, _.matches({'genres': this.getSelected}))
        }
      }
    }
  }
</script>
<style>
</style>
