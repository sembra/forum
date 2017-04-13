import css from './App.scss';
import InnerStyle from '../InnerStyle/InnerStyle';

export default ({ children }) => (
  <main>
    <InnerStyle css={css} />
    <p className="App_paragraph">App</p>
    {children}
    <p className="App_paragraph">App 2</p>
  </main>
)
