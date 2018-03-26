const router =  require('express').Router();
const path = require('path');

router.get('/api/hello', (req, res) => res.json({greeting: 'Hello from fullstack-react-parcel'}));
router.get('/', (req, res) => res.sendFile(path.join(process.cwd(), '/dist/index.html')));

module.exports = router;
