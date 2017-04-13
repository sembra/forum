//check https://github.com/zeit/next.js/tree/master/examples/with-universal-configuration

const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'BACKUP_URL': prod ? 'https://api.example.com' : 'https://localhost:8080'
};
