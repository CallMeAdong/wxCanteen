<template>
  <div>
    <back-nav title="修改密码"></back-nav>
    <div style="margin-top: 45px;padding: 0 10px;font-size: 14px;">
      <div class="input-item"><span class="w3">原密码</span><input type="password"></div>
      <div class="input-item"><span class="w3">新密码</span><input type="password"></div>
      <div class="input-item"><span class="w4">确认密码</span><input type="password"></div>

      <div class="btn">
          <button>提交修改</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.input-item {
    padding: 15px 0;
}
.input-item span {
    width: 20%;
}
.input-item input {
    width: 80%;
    border: none;
    border-bottom: 1px solid #555;
    outline-style: none;
}
.input-item span.w3{
    width: 4em;
    letter-spacing: 0.5em;
}
.input-item span.w4 {
    padding-right: 7px;
}
div.btn {
    text-align: center;
    margin-top: 20px;
}
div.btn button {
    background: #19be6b;
    color: #fff;
    border: none;
    padding: 10px 40px;
    border-radius: 20px;
    outline-style: none;
}
</style>
