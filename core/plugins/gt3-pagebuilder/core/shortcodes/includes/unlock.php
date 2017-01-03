<div class="unlock_overlay">
    <form name="unlock_form" class="unlock_form pure-form pure-form-aligned" method="post" onsubmit="return false">
    			  <h4>We geven niet zomaar al onze cases <br>aan iedere bezoeker van onze site prijs.</h4>
    			  <p>Dus wil je ze echt zien, laat dan hier je emailadres achter:</p>
                  <p><label for="name">Emailadres: <span>*</span> <br><input type="text" name="email" value="<?php echo esc_attr($_POST['email']); ?>" id="email"></label>
                  </p>
                  <input type="hidden" name="submitted" value="1">
                  <p><input type="submit" name="verstuur" class="sendButton"></p>
    </form>
</div>

