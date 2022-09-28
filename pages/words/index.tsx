import AddWord from "../../components/word/AddWord";
import WordList from "../../components/word/WordList";

const WordsPage = () => {
  return (
    <div>
      <h1 className="text-6xl">Mutation</h1>
      <WordList />
      <AddWord />
    </div>
  );
};

export default WordsPage;
