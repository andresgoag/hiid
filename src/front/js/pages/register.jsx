import React from 'react'

export const Register = () => {
    return (
        <div>
            <figure class="background">
                <img src="https://m-lp.com/wp-content/uploads/2021/11/FloatingCardsGrey.png" alt="" />
            </figure>

            <figure class="logo">
                <img src="https://m-lp.com/wp-content/uploads/2021/11/Hiidlogo.png" alt="" />
            </figure>

            <div class="slogan-container">
                <div class="slogan-subcontainer">
                    <p class="slogan">Conéctate como nunca con tus clientes</p>
                    <p class="crear_cuenta_desktop">¿Ya eres miembro? <a href="#">Inicia sesión</a></p>
                </div>
            </div>


            <div class="form-container">
                <form class="form" action="">
            
                <label for="input-email" style="display: none;">Tu email</label>
                    <input type="text" class="form__input" id="input-email" name="input-email" placeholder="Tu email" required />
            
                    <div class="password-input">
                        <label for="input-password" style="display: none;">Contraseña</label>
                        <input type="password" class="form__input" id="input-password" name="input-password" placeholder="Crea una contraseña" required />
                        <a class="eye-icon"></a>
                    </div>

                    <div class="password-input">
                        <label for="input-password-repeat" style="display: none;">Repite contraseña</label>
                        <input type="password" class="form__input" id="input-password-repeat" name="input-password-repeat" placeholder="Verifica tu contraseña" required />
                        <a class="eye-icon"></a>
                    </div>
            
                    <input type="submit" class="form__submit" value="Entrar" />

                    <label class="form__custom-checkbox" for="acepto-terminos">
                        <input type="checkbox" id="acepto-terminos" name="acepto-terminos" value="acepto-terminos" />
                        <span class="checkmark"></span>
                        <p class="links_terminos">
                            Acepto los 
                            <a href="#">términos y condiciones</a>
                            y la 
                            <a href="#">política de privacidad</a> de la web.
                        </p>
                    </label>

                </form>
            </div>



            <p class="crear_cuenta">¿Ya eres miembro? <a href="#">Inicia sesión</a></p>
        </div>
    )
}