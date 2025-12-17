import Providers from "./Providers";
import TodoApp from "./components/TodoApp";

export default function ReduxPage() {
  return (
    <Providers>
      <TodoApp />
    </Providers>
  );
}
