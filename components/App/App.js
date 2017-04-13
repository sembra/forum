import css from './App.scss';

export default ({ children }) => (
  <main>
    <style dangerouslySetInnerHTML={{ __html: css }} />
    <p className="App_paragraph">App</p>
    {children}
    <p className="App_paragraph">App 2</p>
  </main>
)
