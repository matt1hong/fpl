<?php

/* info.html.twig */
class __TwigTemplate_733569323fd3e9d750650564fb8f6319a275e2e04eb623c3693f76c147762360 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("partials/base.html.twig", "info.html.twig", 1);
        $this->blocks = array(
            'titlebar' => array($this, 'block_titlebar'),
            'content_top' => array($this, 'block_content_top'),
            'content' => array($this, 'block_content'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "partials/base.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_titlebar($context, array $blocks = array())
    {
        // line 4
        echo "    <div class=\"button-bar\">
        <a class=\"button\" href=\"";
        // line 5
        echo (isset($context["base_url"]) ? $context["base_url"] : null);
        echo "\"><i class=\"fa fa-reply\"></i> ";
        echo $this->env->getExtension('AdminTwigExtension')->tuFilter("PLUGIN_ADMIN.BACK");
        echo "</a>
    </div>
    <h1><i class=\"fa fa-fw fa-wrench\"></i> ";
        // line 7
        echo $this->env->getExtension('AdminTwigExtension')->tuFilter("PLUGIN_ADMIN.CONFIGURATION");
        echo " - ";
        echo $this->env->getExtension('AdminTwigExtension')->tuFilter("PLUGIN_ADMIN.PHP_INFO");
        echo "</h1>
";
    }

    // line 10
    public function block_content_top($context, array $blocks = array())
    {
        // line 11
        echo "    <ul class=\"tab-bar\">
        <li><a href=\"";
        // line 12
        echo (isset($context["base_url_relative"]) ? $context["base_url_relative"] : null);
        echo "/system\">System</a></li>
        <li><a href=\"";
        // line 13
        echo (isset($context["base_url_relative"]) ? $context["base_url_relative"] : null);
        echo "/site\">Site</a></li>
        <li class=\"active\"><span>Info</span></li>
    </ul>
";
    }

    // line 18
    public function block_content($context, array $blocks = array())
    {
        // line 19
        echo "    <div id=\"phpinfo\">
    ";
        // line 20
        echo $this->getAttribute((isset($context["admin"]) ? $context["admin"] : null), "phpinfo", array());
        echo "
    </div>
";
    }

    public function getTemplateName()
    {
        return "info.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  75 => 20,  72 => 19,  69 => 18,  61 => 13,  57 => 12,  54 => 11,  51 => 10,  43 => 7,  36 => 5,  33 => 4,  30 => 3,  11 => 1,);
    }
}
/* {% extends 'partials/base.html.twig' %}*/
/* */
/* {% block titlebar %}*/
/*     <div class="button-bar">*/
/*         <a class="button" href="{{ base_url }}"><i class="fa fa-reply"></i> {{ "PLUGIN_ADMIN.BACK"|tu }}</a>*/
/*     </div>*/
/*     <h1><i class="fa fa-fw fa-wrench"></i> {{ "PLUGIN_ADMIN.CONFIGURATION"|tu }} - {{ "PLUGIN_ADMIN.PHP_INFO"|tu }}</h1>*/
/* {% endblock %}*/
/* */
/* {% block content_top %}*/
/*     <ul class="tab-bar">*/
/*         <li><a href="{{ base_url_relative }}/system">System</a></li>*/
/*         <li><a href="{{ base_url_relative }}/site">Site</a></li>*/
/*         <li class="active"><span>Info</span></li>*/
/*     </ul>*/
/* {% endblock %}*/
/* */
/* {% block content %}*/
/*     <div id="phpinfo">*/
/*     {{ admin.phpinfo }}*/
/*     </div>*/
/* {% endblock %}*/
/* */
/* */
