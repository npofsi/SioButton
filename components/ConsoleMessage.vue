<template>
  <div style="display: none;" />
</template>
<script>
export default {
  mounted() {
    if (process.env.NODE_ENV === 'production') {
      const dayjs = require('dayjs');
      let started = dayjs('20200107', 'YYYYMMDD');
      //const heart = 'color: #FF5A79; font-size: 105px;';
      //console.log('%c❤%c星宮汐%c❤', heart, 'color: #0EBCFA; font-size: 105px; font-weight: bold;', heart);
      console.log('%c' + this.$t('site.title') + '🌟🐧', 'color: #6CB9F6', 'https://github.com/npofsi/SioButton');
      console.log('The project has lived for ' + dayjs().diff(started, 'day') + ' days.');
    }
  }
};
</script>
