</div><!-- .wrapper -->

<footer>
    <div class="footer_line container">
        <?php
                        /* footer sidebar */
                        if ( ! is_404() ) : ?>
                                <div id="footer-widgets" class="widget-area three">
                                        <?php if ( is_active_sidebar( 'sidebar-4' ) ) : ?>
                                                <?php dynamic_sidebar( 'sidebar-4' ); ?>
                                        <?php endif; ?>
 
                                        <?php if ( is_active_sidebar( 'sidebar-5' ) ) : ?>
                                                <?php dynamic_sidebar( 'sidebar-5' ); ?>
                                        <?php endif; ?>
 
                                        <?php if ( is_active_sidebar( 'sidebar-6' ) ) : ?>
                                                <?php dynamic_sidebar( 'sidebar-6' ); ?>
                                        <?php endif; ?>
                                        
                                        <?php if ( is_active_sidebar( 'sidebar-7' ) ) : ?>
                                                <?php dynamic_sidebar( 'sidebar-7' ); ?>
                                        <?php endif; ?>
                                </div><!-- #footer-widgets -->
                <?php endif; ?>
        <div class="clear"></div>
       
    </div>
    <div class="footer_copyright">
    	<?php echo gt3_get_theme_option('copyright'); ?>
    </div>
</footer>

<?php gt3_the_pb_custom_bg_and_color(gt3_get_theme_pagebuilder(@get_the_ID())); gt3_the_theme_option("code_before_body");
wp_footer(); ?>
</div>
</div>
</body>
</html>