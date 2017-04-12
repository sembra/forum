import css from './Header.scss';

export default () => (
  <header>
    <style dangerouslySetInnerHTML={{ __html: css }} />
    <p>Header</p>
  </header>
)
