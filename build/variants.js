module.exports = [
  {
    name: 'styles.css'
  },
  {
    name: 'styles-no-layout.css',
    ignore: [
      'layout.scss'
    ]
  },
  {
    name: 'styles-opt-out.css',
    optOut: true
  },
  {
    name: 'styles-opt-out-no-layout.css',
    ignore: [
      'layout.scss'
    ],
    optOut: true
  }
]
