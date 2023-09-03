import { Form } from '../Form/Form';

export const Register = () => {
  return (
    <main className="register">
      <Form
        name="register"
        legend="Добро пожаловать!"
        buttonText="Зарегистрироваться"
        text="Уже зарегистрированы?"
        link="/signin"
        linkText="Войти"
      />
    </main>
  );
};
