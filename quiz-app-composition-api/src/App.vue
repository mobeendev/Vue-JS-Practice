<template>
  <div class="ctr">
    <h2>With Composition API</h2>
    <transition name="fade" mode="out-in">
      <questions
        v-if="questionsAnswered < questions.length"
        :questions="questions"
        :questionsAnswered="questionsAnswered"
        @question-answered="questionAnswered"
      />
      <result v-else :results="results" :totalCorrect="totalCorrect" />
    </transition>

    <button
      type="button"
      class="reset-btn"
      @click.prevent="reset"
      v-if="questionsAnswered === questions.length"
    >
      Reset
    </button>
  </div>
</template>

<script>
import Questions from "./components/Questions.vue";
import Result from "./components/Result.vue";
import useQuiz from "./hooks/quiz.js";

export default {
  name: "App",
  components: {
    Questions,
    Result,
  },

  setup() {
    const {
      questionsAnswered,
      totalCorrect,
      questions,
      results,
      questionAnswered,
      reset,
    } = useQuiz();

    return {
      questionsAnswered,
      totalCorrect,
      questions,
      results,
      questionAnswered,
      reset,
    };
  },
};
</script>
