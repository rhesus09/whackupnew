<template>
  <div class="navbar-right ">
    <ul class="nav navbar-nav m-n hidden-xs nav-user user">
      <li class="hidden-xs">
        <a href="#" class="dropdown-toggle lt" data-toggle="dropdown">
          <i class="icon-bell"></i>
          <span class="badge badge-sm up bg-danger count">2</span>
        </a>
        <section class="dropdown-menu aside-xl animated fadeInUp">
          <section class="panel bg-white">
            <div class="panel-heading b-light bg-light">
              <strong>You have <span class="count">2</span> notifications</strong>
            </div>
            <div class="list-group list-group-alt">
              <a href="#" class="media list-group-item">
                    <span class="pull-left thumb-sm">
                      <img src="../../../images/a0.png" alt="..." class="img-circle">
                    </span>
                <span class="media-body block m-b-none">
                      Use awesome animate.css<br>
                      <small class="text-muted">10 minutes ago</small>
                    </span>
              </a>
              <a href="#" class="media list-group-item">
                    <span class="media-body block m-b-none">
                      1.0 initial released<br>
                      <small class="text-muted">1 hour ago</small>
                    </span>
              </a>
            </div>
            <div class="panel-footer text-sm">
              <a href="#" class="pull-right"><i class="fa fa-cog"></i></a>
              <a href="#notes" data-toggle="class:show animated fadeInRight">See all the notifications</a>
            </div>
          </section>
        </section>
      </li>
      <li class="dropdown">
        <a href="#" class="dropdown-toggle bg clear" data-toggle="dropdown">
              <span class="thumb-sm avatar pull-right m-t-n-sm m-b-n-sm m-l-sm">
                <img src="../../../images/a0.png" alt="...">
              </span>
          John.Smith <b class="caret"></b>
        </a>
        <ul class="dropdown-menu animated fadeInRight">
          <li>
            <span class="arrow top"></span>
            <a href="#">Settings</a>
          </li>
          <li>
            <router-link to="/profile">Profile</router-link>
          </li>
          <li>
            <a href="#">
              <span class="badge bg-danger pull-right">3</span>
              Notifications
            </a>
          </li>
          <li>
            <a href="docs.html">Help</a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="modal.lockme.html" data-toggle="ajaxModal">Logout</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script></script>
<style></style>
