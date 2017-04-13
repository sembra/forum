import css from './Header.scss';
import InnerStyle from '../InnerStyle/InnerStyle';

export default () => (
  <header>
    <InnerStyle css={css} />
    <p className="Header_paragraph">Header</p>
  </header>
)
