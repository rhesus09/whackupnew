<template>
  <section class="vbox">
    <section class="scrollable padder-lg w-f-md" id="bjax-target">
      <a href="#" class="pull-right text-muted m-t-lg" data-toggle="class:fa-spin"><i
        class="icon-refresh i-lg  inline" id="refresh"></i></a>
      <h2 class="font-thin m-b">Votre Sélection <span class="musicbar animate inline m-l-sm"
                                                      style="width:20px;height:20px">
                    <span class="bar1 a1 bg-primary lter"></span>
                    <span class="bar2 a2 bg-info lt"></span>
                    <span class="bar3 a3 bg-success"></span>
                    <span class="bar4 a4 bg-warning dk"></span>
                    <span class="bar5 a5 bg-danger dker"></span>
                  </span></h2>
      <br>
      <br>
     <abonnement></abonnement>
      <!-- new songs!-->
      <br>
      <br>
      <br>
     <news></news>
      <!-- banner download !-->
      <banner></banner>
    </section>
    <!-- player !-->
    <footer class="footer bg-dark">
      <div id="jp_container_N">
        <div class="jp-type-playlist">
          <div id="jplayer_N" class="jp-jplayer hide"></div>
          <div class="jp-gui">
            <div class="jp-video-play hide">
              <a class="jp-video-play-icon">play</a>
            </div>
            <div class="jp-interface">
              <div class="jp-controls">
                <div><a class="jp-previous"><i class="icon-control-rewind i-lg"></i></a></div>
                <div>
                  <a class="jp-play"><i class="icon-control-play i-2x"></i></a>
                  <a class="jp-pause hid"><i class="icon-control-pause i-2x"></i></a>
                </div>
                <div><a class="jp-next"><i class="icon-control-forward i-lg"></i></a></div>
                <div class="hide"><a class="jp-stop"><i class="fa fa-stop"></i></a></div>
                <div><a class="" data-toggle="dropdown" data-target="#playlist"><i class="icon-list"></i></a>
                </div>
                <div class="jp-progress hidden-xs">
                  <div class="jp-seek-bar dk">
                    <div class="jp-play-bar bg-info">
                    </div>
                    <div class="jp-title text-lt">
                      <ul>
                        <li></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="hidden-xs hidden-sm jp-current-time text-xs text-muted"></div>
                <div class="hidden-xs hidden-sm jp-duration text-xs text-muted"></div>
                <div class="hidden-xs hidden-sm">
                  <a class="jp-mute" title="mute"><i class="icon-volume-2"></i></a>
                  <a class="jp-unmute hid" title="unmute"><i class="icon-volume-off"></i></a>
                </div>
                <div class="hidden-xs hidden-sm jp-volume">
                  <div class="jp-volume-bar dk">
                    <div class="jp-volume-bar-value lter"></div>
                  </div>
                </div>
                <div>
                  <a class="jp-shuffle" title="shuffle"><i class="icon-shuffle text-muted"></i></a>
                  <a class="jp-shuffle-off hid" title="shuffle off"><i class="icon-shuffle text-lt"></i></a>
                </div>
                <div>
                  <a class="jp-repeat" title="repeat"><i class="icon-loop text-muted"></i></a>
                  <a class="jp-repeat-off hid" title="repeat off"><i class="icon-loop text-lt"></i></a>
                </div>
                <div class="hide">
                  <a class="jp-full-screen" title="full screen"><i class="fa fa-expand"></i></a>
                  <a class="jp-restore-screen" title="restore screen"><i class="fa fa-compress text-lt"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="jp-playlist dropup" id="playlist">
            <ul class="dropdown-menu aside-xl dker">
              <!-- The method Playlist.displayPlaylist() uses this unordered list -->
              <li class="list-group-item"></li>
            </ul>
          </div>
          <div class="jp-no-solution hide">
            <span>Update Required</span>
            To play the media you will need to either update your browser to a recent version or update your <a
            href="http://get.adobe.com/flashplayer/" target="_blank">Flash plugin</a>.
          </div>
        </div>
      </div>
    </footer>
  </section>
</template>
<script>
  import abonnement from './abonnement.vue'
  import banner from './banner.vue'
  import news from './news.vue'
  export default {
    components: {banner, news, abonnement}
  }
</script>
<style>
</style>
