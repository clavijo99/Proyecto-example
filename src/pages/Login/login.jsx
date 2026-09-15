import './login.css'

export default function Login() {
	return (
		<main className="login-page">
			<section className="login-card" aria-labelledby="login-title">
				<header className="login-header">
					<h1 id="login-title">Iniciar sesión</h1>
					<p>Accede a tu cuenta</p>
				</header>

				<form className="login-form">
					<div className="form-field">
						<label htmlFor="email">Correo electrónico</label>
						<input
							id="email"
							name="email"
							type="email"
							placeholder="tu@email.com"
							autoComplete="email"
							required
						/>
					</div>

					<div className="form-field">
						<label htmlFor="password">Contraseña</label>
						<input
							id="password"
							name="password"
							type="password"
							placeholder="Tu contraseña"
							autoComplete="current-password"
							required
						/>
					</div>

					<button type="submit">Entrar</button>
				</form>

				<footer className="login-footer">
					<a href="#forgot-password">¿Olvidaste tu contraseña?</a>
				</footer>
			</section>
		</main>
	)
}
