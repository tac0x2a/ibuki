<template>
  <div>
    Target URI:
    <input
      type="uri"
      v-model="targetUri"
      placeholder="https://..."
      size="120"
    />
    <br />
    Yasuri Parse Tree(JSON)
    <input type="textarea" v-model="targetJson" placeholder="" size="120" />
    <input type="button" v-on:click="yasuri()" value="Run Yasuri" />

    <div v-if="result">
      <h1>Result: {{ result.result }}</h1>
      <ul>
        <li>Process Time: {{ result.process_time_ms }} ms </li>
        <li>Status Code: {{ result.status_code }}</li>
      </ul>
      <input type="textarea" v-model="result.output" placeholder="" size="120" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      targetUri: "https://www.ruby-lang.org/en/",
      targetJson: '{ "text_title":"/html/head/title", "text_desc": "//*[@id=\'intro\']/p" }',
      processing: false,
      result: null,
    };
  },

  methods: {
    yasuri(event) {

      const uri = encodeURI(`/api/yasuri?uri=${this.targetUri}&json=${this.targetJson}`);
      // const url = '/'
      console.log(uri);
      axios
      .get(uri)
      .then((response) => {
        // handle success
        console.log(response);
        this.result = response.data
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .finally(() => {
        // always executed
      });
    }

  }
};
</script>

<style>
</style>