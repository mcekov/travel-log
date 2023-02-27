'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TravelLog } from '@/models/TravelLogs';

export default function TravelLogForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TravelLog>({resolver: zodResolver(TravelLog)});

  const onSubmit: SubmitHandler<TravelLog> = (data) => console.log(data);
  return (
    <>
      <div className="flex justify-end">
        <button
          onClick={() => {
            console.log('clicked');
          }}
          className="btn btn-secondary"
        >
          CANCEL
        </button>
      </div>
      <form
        className="mx-auto max-w-md flex gap-4 flex-col my-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-control w-full">
          <label className="label">
            <span className={`label-text capitalize ${errors.title ? 'input-error' : null}`}>Latitude, Longitude</span>
          </label>
          <input
            {...register('title')}
            className="input input-bordered w-full"
          />
          {errors.title && <span>{errors.title.message}</span>}
        </div>
        <button className="btn btn-success">Createasd</button>
      </form>
    </>
  );
}
