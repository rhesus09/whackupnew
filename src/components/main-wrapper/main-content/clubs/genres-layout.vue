<template>
  <aside class="aside bg-light dk" id="sidebar">
    <section class="vbox animated fadeInUp">
      <section class="scrollable hover">
        <div class="list-group no-radius no-border no-bg m-t-n-xxs m-b-none auto">
          <el-select v-model="genre" multiple placeholder="Select" class="list-group-item  btn-default">
            <el-option
              v-for="item in getgenrelist"
              :key="item.idGenreClub"
              :label="item.name"
              :value="item"
            >
            </el-option>
          </el-select>
          <a>
            <!--     <el-checkbox-group v-model="genre" fill="#4cb6cb">
                      <el-checkbox-button v-for="item in getgenrelist" @change="test(item.idGenreClub)" type="checkbox" :label="item.idGenreClub"
                                          :key="item" :id="item.idGenreClub" class="list-group-item btn btn-default"
                                          :ref="'genre' + item.idGenreClub">
                        {{item.name}}
                      </el-checkbox-button>
                    </el-checkbox-group> !-->
          </a>
        </div>

      </section>
    </section>
  </aside>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  import _ from 'lodash'
  import * as types from '../../../../store/types'
  export default {
    data () {
      return {
        list_genres: 'test',
        checkboxGroup1: ['Shanghai'],
        cities: ['test']
      }
    },
    methods: {
      ...mapActions({settilegenrecurrent: types.SET_LIST_SELECTED, settitlegenre: types.SET_GENRE_LIST}),
      test (id) {
        if (_.includes(this.getgenrelistcurrent, id)) {
          window.$('#' + id).button('toggle')
        }
        //  this.$store.dispatch(types.SET_GENRE_LIST)
      }
    },
    computed: {
      ...mapGetters({getgenrelist: types.GET_GENRE_LIST, getgenrelistcurrent: types.GET_GENRE_LIST_SELECTED}),
      genre: {
        set (value) {
          console.log(value)
          if (_.includes(this.getgenrelistcurrent, value)) {
            window.$('#' + value).button('toggle')
          }
          // event.emit('filterapp:change', this.application)
          this.settilegenrecurrent(value)
        },
        get () {
          return this.getgenrelistcurrent
        }
      }
    }
  }
</script>
<style>
</style>
