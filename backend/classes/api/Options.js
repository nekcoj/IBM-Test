const router = require('express').Router();
const db = require('../_helpers/DBHelper').getInstance();

router.get('/', (req, res) => {
  let str = /* sql */ `SELECT * FROM options`
  res.json(
    db.select(str)
  );
});

module.exports = router;