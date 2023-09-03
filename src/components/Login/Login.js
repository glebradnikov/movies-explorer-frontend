import { Form } from '../Form/Form';

export const Login = () => {
  return (
    <main className="register">
      <Form
        name="login"
        legend="Рады видеть!"
        buttonText="Войти"
        text="Ещё не зарегистрированы?"
        link="/signup"
        linkText="Регистрация"
      />
    </main>
  );
};
