<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" id="navbar-toggle" class="navbar-toggle collapsed" data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">LOGO</a>
      </div>
      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right">
          <li class="active"><a href="#/"><i class="fa fa-home"></i> 首页<span class="sr-only">(current)</span></a></li>
          <li class="line"></li>
          <li><a href="#"><i class="fa fa-pencil-square-o"></i> 博客</a></li>
          <li class="line"></li>
          <li><a href="#"><i class="fa fa-pie-chart"></i> 团队成员</a></li>
          <li class="line"></li>
          <li><a href="#"><i class="fa fa-paper-plane"></i> 案例中心</a></li>
          <li class="line"></li>
          <li>
            <a href="#/about"><i class="fa fa-exclamation-circle"></i> 关于</a></li>
          <li class="line"></li>
          <li class="dropdown">
            <a href="javascript:;" class="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown"><i
              class="fa fa-flask"></i> 更多功能 <span class="fa fa-angle-down"></span> </a>
            <ul class="dropdown-menu">
              <li><a href="#"><i class="fa fa-comment"></i> 留言互动</a></li>
              <li><a href="#"><i class="fa fa-exclamation-circle"></i> 联系我们</a></li>
            </ul>
          </li>
          <li class="right-ioc"><a href="#" data-toggle="modal" data-target="#myLogin"><i class="fa fa-user-circle"></i></a></li>
          <li class="line right-ioc"></li>
          <li class="right-ioc"><a href="#" data-toggle="modal" data-target="#mySearch"><i class="fa fa-search"></i></a></li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .line {
    margin: 18px 5px 5px;
    height: 15px;
    border-left: solid 1px #bad5ba;
  }

  .dropdown .dropdown-menu{
    min-width: 120px;
  }
  @media screen and (max-width: 766px) {
    .line {
      display: none;
    }
  }
  @media screen and (max-width: 990px) {
    .right-ioc {
      display: none;
    }
  }
</style>
<script>
  export default {
    name: 'my-header',
    data() {
      return {
        msg: 'this is my header'
      }
    }
  }

  /**
   * @preserve
   * Project: Bootstrap Hover Dropdown
   * Author: Cameron Spear
   * Version: v2.2.1
   * Contributors: Mattia Larentis
   * Dependencies: Bootstrap's Dropdown plugin, jQuery
   * Description: A simple plugin to enable Bootstrap dropdowns to active on hover and provide a nice user experience.
   * License: MIT
   * Homepage: http://cameronspear.com/blog/bootstrap-dropdown-on-hover-plugin/
   */
  ;
  (function ($, window, undefined) {
    // outside the scope of the jQuery plugin to
    // keep track of all dropdowns
    var $allDropdowns = $();

    // if instantlyCloseOthers is true, then it will instantly
    // shut other nav items when a new one is hovered over
    $.fn.dropdownHover = function (options) {
      // don't do anything if touch is supported
      // (plugin causes some issues on mobile)
      if ('ontouchstart' in document) return this; // don't want to affect chaining

      // the element we really care about
      // is the dropdown-toggle's parent
      $allDropdowns = $allDropdowns.add(this.parent());

      return this.each(function () {
        var $this = $(this),
          $parent = $this.parent(),
          defaults = {
            delay: 100,
            hoverDelay: 0,
            instantlyCloseOthers: true
          },
          data = {
            delay: $(this).data('delay'),
            hoverDelay: $(this).data('hover-delay'),
            instantlyCloseOthers: $(this).data('close-others')
          },
          showEvent = 'show.bs.dropdown',
          hideEvent = 'hide.bs.dropdown',
          // shownEvent  = 'shown.bs.dropdown',
          // hiddenEvent = 'hidden.bs.dropdown',
          settings = $.extend(true, {}, defaults, options, data),
          timeout, timeoutHover;

        $parent.hover(function (event) {
          // so a neighbor can't open the dropdown
          if (!$parent.hasClass('open') && !$this.is(event.target)) {
            // stop this event, stop executing any code
            // in this callback but continue to propagate
            return true;
          }

          openDropdown(event);
        }, function () {
          // clear timer for hover event
          window.clearTimeout(timeoutHover)
          timeout = window.setTimeout(function () {
            $this.attr('aria-expanded', 'false');
            $parent.removeClass('open');
            $this.trigger(hideEvent);
          }, settings.delay);
        });

        // this helps with button groups!
        $this.hover(function (event) {
          // this helps prevent a double event from firing.
          // see https://github.com/CWSpear/bootstrap-hover-dropdown/issues/55
          if (!$parent.hasClass('open') && !$parent.is(event.target)) {
            // stop this event, stop executing any code
            // in this callback but continue to propagate
            return true;
          }

          openDropdown(event);
        });

        // handle submenus
        $parent.find('.dropdown-submenu').each(function () {
          var $this = $(this);
          var subTimeout;
          $this.hover(function () {
            window.clearTimeout(subTimeout);
            $this.children('.dropdown-menu').show();
            // always close submenu siblings instantly
            $this.siblings().children('.dropdown-menu').hide();
          }, function () {
            var $submenu = $this.children('.dropdown-menu');
            subTimeout = window.setTimeout(function () {
              $submenu.hide();
            }, settings.delay);
          });
        });

        function openDropdown(event) {
          if ($this.parents(".navbar").find(".navbar-toggle").is(":visible")) {
            // If we're inside a navbar, don't do anything when the
            // navbar is collapsed, as it makes the navbar pretty unusable.
            return;
          }

          // clear dropdown timeout here so it doesnt close before it should
          window.clearTimeout(timeout);
          // restart hover timer
          window.clearTimeout(timeoutHover);

          // delay for hover event.
          timeoutHover = window.setTimeout(function () {
            $allDropdowns.find(':focus').blur();

            if (settings.instantlyCloseOthers === true)
              $allDropdowns.removeClass('open');

            // clear timer for hover event
            window.clearTimeout(timeoutHover);
            $this.attr('aria-expanded', 'true');
            $parent.addClass('open');
            $this.trigger(showEvent);
          }, settings.hoverDelay);
        }
      });
    };

    $(document).ready(function () {
      // apply dropdownHover to all elements with the data-hover="dropdown" attribute
      $('[data-hover="dropdown"]').dropdownHover();
    });
  })(jQuery, window);

</script>



