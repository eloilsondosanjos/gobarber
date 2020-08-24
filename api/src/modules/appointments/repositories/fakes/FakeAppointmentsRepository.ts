import { isEqual } from 'date-fns';
import { uuid } from 'uuidv4';

import IAppointmentsRepositiry from '@modules/appointments/repositories/IAppointmentsRepository';
import ICreateAppointmentDTO from '@modules/appointments/dtos/ICreateAppointmentDTO';

import Appointment from '../../infra/typeorm/entities/Appointment';

class AppointmentsRepository implements IAppointmentsRepositiry {
  private appointments: Appointment[] = [];

  public async findByDate(date: Date): Promise<Appointment | undefined> {
    const findAppointment = this.appointments.find(
      appointment => isEqual(appointment.date, date),
    );

    return findAppointment;
  }

  public async create({
    provider_id,
    date,
  }: ICreateAppointmentDTO): Promise<Appointment> {
    const appointement = new Appointment();

    Object.assign(appointement, { id: uuid(), date, provider_id });

    this.appointments.push(appointement)

    return appointement;
  }
}

export default AppointmentsRepository;
