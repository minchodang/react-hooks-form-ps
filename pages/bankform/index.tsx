import { FormProvider, useForm } from 'react-hook-form';
import { BankInput } from '../../components/pages/BankInput';

export default function Bank() {
  const methods = useForm({
    mode: 'onBlur',
  });

  return (
    <FormProvider {...methods}>
      <BankInput />
    </FormProvider>
  );
}
