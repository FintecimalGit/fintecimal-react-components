export const data = [
  {
    label: 'representante legal',
    selected: false,
    complete: true,
    action: false,
    readOnly: true,
    values: []
  },
  {
    label: 'director de finanzas',
    selected: false,
    complete: true,
    readOnly: false,
    values: []
  },
  {
    label: 'director de cuentas',
    selected: true,
    complete: false,
    readOnly: false,
    values: [
      {
        label: 'AAAA - 1',
        complete: true
      },
      {
        label: 'AAAA - 2',
        complete: false
      },
      {
        label: 'AAAA - 3',
        complete: false,
        hidden: true,
      }
    ]
  },
  {
    label: 'cobranza',
    selected: false,
    complete: false,
    readOnly: true,
    values: []
  }
];
