import css from './App.scss';

export default ({ children }) => (
  <main>
    <style dangerouslySetInnerHTML={{ __html: css }} />
    <p>App</p>
    {children}
    <p>App 2</p>
  </main>
)
