import { FormProvider, useForm } from 'react-hook-form';

export default function Bank() {
  const methods = useForm({
    mode: 'onBlur',
  });

  return (
    <FormProvider {...methods}>
      <div>기본정보</div>
      <div>계좌정보</div>
    </FormProvider>
  );
}
