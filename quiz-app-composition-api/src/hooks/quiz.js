import data from "../questions.json";
import { ref } from "vue";

export default function useQuiz () {
    let questionsAnswered = ref(0);
    let questions = ref(data.questions);
    let results = ref(data.results);
    let totalCorrect = ref(0);

    function questionAnswered(is_correct) {
      if (is_correct) {
        totalCorrect.value++;
      }

      questionsAnswered.value++;
    }

    function reset() {
      questionsAnswered.value = 0;
      totalCorrect.value = 0;
    }

    return {
      questionsAnswered,
      totalCorrect,
      questions,
      results,
      questionAnswered,
      reset,
    };
}