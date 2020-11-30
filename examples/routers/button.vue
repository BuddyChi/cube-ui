<template>
  <section class="sec">
    <div>
      <header>类型</header>
      <cube-button type="default">默认按钮</cube-button>
      <cube-button type="primary">主要按钮</cube-button>
      <cube-button type="info">信息按钮</cube-button>
      <cube-button type="success">成功按钮</cube-button>
      <cube-button type="danger">危险按钮</cube-button>
    </div>
    <div>
      <header>尺寸</header>
      <cube-button size="mini">Mini按钮</cube-button>
      <cube-button size="small">Small按钮</cube-button>
      <cube-button size="default">默认按钮</cube-button>
      <cube-button size="medium">Medium按钮</cube-button>
      <cube-button size="large">Large按钮</cube-button>
      <cube-button size="fit">Fit按钮</cube-button>
    </div>
    <div>
      <header>包含图标的按钮</header>
      <cube-button icon="warning">分享</cube-button>
      <cube-button icon="share" type='info'>分享</cube-button>
    </div>
    <div>
      <header>描边类型的按钮</header>
      <cube-button outline>描边类型</cube-button>
    </div>
  </section>
</template>
<script>
export default {};
</script>
