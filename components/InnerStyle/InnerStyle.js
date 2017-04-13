const prod = process.env.NODE_ENV === 'production';

export default ({css}) => {
  return prod ? null : <style dangerouslySetInnerHTML={{ __html: css }} />;
}
