<template>
  <div>

    <div class="modal fade in" id="myLogin" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
      <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="sign-login" style="display: block;">
          <div class="modal-header">
            <button class="close" data-dismiss="modal">×</button>
            <h3 class="sign-title">用户登陆</h3>
          </div>
          <div class="clearfix"></div>
          <div class="modal-body">
            <div class="container-fluid">
              <div class="row">
                <div class="col-sm-7 ajax_login_list1">
                  <form id="formtest" action="" method="post">
                    <div class="input-group input-login">
                      <span class="input-group-addon"><i class="fa fa-user faw"></i></span>
                      <input class="form-control lbtn" placeholder="请输入用户名" id="input1" name="user" value=""
                             type="text">
                    </div>
                    <div class="input-group input-login">
                      <span class="input-group-addon"><i class="fa fa-lock faw"></i></span>
                      <input class="form-control lbtn" placeholder="请输入密码" id="input2" name="pw" value=""
                             type="password">
                    </div>
                    <div class="input-group input-login">
                      <span class="input-group-addon"><i class="fa fa-file-code-o faw"></i></span>
                      <input class="form-control lbtn" placeholder="请填写验证码" id="imgcode" name="imgcode" value=""
                             type="text">
                      <span class="ajax_reg_imgcode imgcode"><img
                        src="https://www.0dayhack.com/include/lib/checkcode.php?1537365254723" id="code"
                        title="单击刷新验证码"></span>
                    </div>
                    <div class="checkbox">
                      <label>
                        <input name="ispersis" id="ispersis" class="mgc mgc-info" value="1" title="7天免登陆"
                               type="checkbox"> 记住密码
                      </label>
                      <span style="float:right">
													<a href="javascript:;" class="wjmm">忘记密码?</a>
												</span>
                      <div class="clearfix"></div>
                    </div>
                  </form>
                  <div id="contentdiv_a" style="text-align: center;"></div>
                  <div class="form-group">
                    <input name="send_ajax" id="send_ajax" value="用户登陆" class="btn ajax_reg_btn btn-block"
                           type="submit">
                  </div>
                </div>
                <div class="col-sm-5 ajax_login_list2">
                  <div class="form-group">
                    <p>还没有账号?</p>
                  </div>
                  <div class="form-group">
                    <input value="立即注册" class="btn ajax_reg_btn btn-block ljzc" type="submit">
                  </div>
                  <div class="form-group">
                    <p>您还可以使用其他方式登陆</p>
                  </div>
                  <div class="form-group input-login">
                  </div>
                  <div class="form-group">
                    <p>请珍惜本站账号,一经发现账号共享,取消VIP资格.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="sign-reg" style="display: none;">
          <div class="modal-header">
            <button class="close" data-dismiss="modal">×</button>
            <h3 class="sign-title">注册账号</h3>
          </div>
          <div class="clearfix"></div>
          <div class="modal-body">
            <div class="container-fluid">
              <div class="row">
                <div class="col-sm-7 ajax_login_list1">
                  <form id="refrom" action="" method="post">
                    <div class="input-group input-reg">
                      <span class="input-group-addon"><i class="fa fa-user faw"></i></span>
                      <input class="form-control rbtn" placeholder="请输入用户名" name="reusername" value="" type="text">
                    </div>
                    <div class="input-group input-reg">
                      <span class="input-group-addon"><i class="fa fa-envelope-o faw"></i></span>
                      <input class="form-control rbtn" placeholder="请输入邮箱" name="regemail" value="" type="email">
                    </div>
                    <div class="input-group input-reg">
                      <span class="input-group-addon"><i class="fa fa-lock faw"></i></span>
                      <input class="form-control rbtn" placeholder="请输入密码" name="repassword" value="" type="password">
                    </div>
                    <div class="input-group input-reg">
                      <span class="input-group-addon"><i class="fa fa-check faw"></i></span>
                      <input class="form-control rbtn" placeholder="请确认密码" name="repassword2" value="" type="password">
                    </div>
                    <div class="input-group input-reg">
                      <span class="input-group-addon"><i class="fa fa-file-code-o faw"></i></span>
                      <input class="form-control rbtn" placeholder="请输入验证码" id="reimgcode" name="reimgcode" value=""
                             type="text">
                      <span class="ajax_reg_imgcode imgcode"><img src="/include/lib/checkcode.php" id="recode"
                                                                  title="单击刷新验证码"></span>
                    </div>

                  </form>
                  <div id="contentdiv_b" style="text-align: center;"></div>
                  <div class="form-group">
                    <input name="re_ajax" id="re_ajax" value="立即注册" class="ajax_reg_btn btn_go form-control"
                           type="submit">
                  </div>
                </div>
                <div class="col-sm-5 ajax_login_list2">
                  <div class="form-group">
                    <p>已有账号?</p>
                  </div>
                  <div class="form-group">
                    <input value="立即登陆" class="btn ajax_reg_btn btn-block ljdl" type="submit">
                  </div>
                  <div class="form-group">
                    <p>您还可以使用其他方式登陆</p>
                  </div>
                  <div class="form-group input-login">
                  </div>
                  <div class="form-group">
                    <p>请珍惜本站账号,一经发现账号共享,取消VIP资格.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="sign-zhaohui" style="display:none">
          <div class="modal-header">
            <button class="close" data-dismiss="modal">×</button>
            <h3 class="sign-title">密码找回</h3>
          </div>
          <div class="clearfix"></div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-7 ajax_login_list1">
                <div class="container-fluid">
                  <form id="formtest" action="" method="post">
                    <div class="input-group input-email">
                      <span class="input-group-addon"><i class="fa fa-retweet faw"></i></span>
                      <input class="form-control lbtn" placeholder="请输入邮箱" id="reemail" name="email" value=""
                             type="email">
                    </div>
                  </form>
                  <div id="contentdiv_t" style="text-align: center;"></div>
                  <div class="form-group ajax_btn-reg">
                    <span><input name="pwre_ajax" id="pwre_ajax" value="找回密码" class="btn ajax_reg_btn btn-block"
                                 type="submit"></span>
                  </div>
                </div>
              </div>
              <div class="col-sm-5 ajax_login_list2">
                <div class="form-group">
                  <p>密码已找回?</p>
                </div>
                <div class="form-group">
                  <input value="立即登陆" class="btn ajax_reg_btn btn-block ljdl" type="submit">
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="sign-saomiao" style="display:none">
          <div class="saomiao-close">扫描登陆<a href="javascript:;" class="closea" title="关闭"></a></div>
          <div id="picdiv" style="margin:-15px"></div>
          <div id="contentdiv_c" style="text-align:center;color:red"></div>
          <div class="clearfix"></div>
        </div>
      </div>
      </div>
    </div>

  </div>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .sign-title {
    font-size: 18px;
    margin: 3px 10px;
    color: #3DBAF9;
    border-bottom: 2px solid #3DBAF9;
    width: 72px;
    padding-bottom: 8px;
  }

  .input-login, .input-reg, .input-email{
    margin-bottom: 15px;
  }

  .ajax_reg_imgcode {
    position: absolute;
    bottom: 5px;
    right: 5px;
    z-index: 9;
  }

  .ajax_reg_btn {
    background-color: #3DBAF9;
    border: 1px solid #3DBAF9;
    color: #fff;
    cursor: url("../assets/link.png"), pointer;
  }

  #myLogin {
  }
</style>
<script>
  export default {
    name: 'login',
    data() {
      return {
        msg: 'this is my index page'
      }
    }
  }
  //模态框
  $(document).ready(function(){
    $('.ljzc').click(function(){
      $('.sign-login').hide();
      $('.sign-saomiao').hide();
      $('.sign-zhaohui').hide();
      $('.sign-reg').show();
    });
    $('.wjmm').click(function(){
      $('.sign-login').hide();
      $('.sign-reg').hide();
      $('.sign-saomiao').hide();
      $('.sign-zhaohui').show();
    });
    $('.ljdl').click(function(){
      $('.sign-reg').hide();
      $('.sign-saomiao').hide();
      $('.sign-zhaohui').hide();
      $('.sign-login').show();
    });
  });
</script>


