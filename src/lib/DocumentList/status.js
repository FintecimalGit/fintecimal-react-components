export const ACCEPTED = 'Aceptado';
export const REJECTED = 'Rechazado';
export const PENDING = 'Pendiente';
export const REVISION = 'En Revisión';

export const SEQUENCE_STATUS = {
  [ACCEPTED]: ACCEPTED,
  [REVISION]: ACCEPTED,
  [REJECTED]: REVISION,
  [PENDING]: REVISION,
}