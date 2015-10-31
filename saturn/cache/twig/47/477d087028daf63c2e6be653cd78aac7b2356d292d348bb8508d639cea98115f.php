<?php

/* form.html.twig */
class __TwigTemplate_b8e42dd901022de1fdf70fae53bec60ae7370739ee9794d92f5beccf3cc2d3ac extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("partials/base.html.twig", "form.html.twig", 1);
        $this->blocks = array(
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

    // line 2
    public function block_content($context, array $blocks = array())
    {
        // line 3
        echo "<article class=\"box post post-excerpt\">
  <header>
    <h2>";
        // line 5
        echo $this->getAttribute($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "header", array()), "title", array());
        echo "</h2>
  </header>
  ";
        // line 7
        echo (isset($context["content"]) ? $context["content"] : null);
        echo "
  ";
        // line 8
        $this->loadTemplate("forms/form.html.twig", "form.html.twig", 8)->display($context);
        // line 9
        echo "</article>
";
    }

    public function getTemplateName()
    {
        return "form.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  46 => 9,  44 => 8,  40 => 7,  35 => 5,  31 => 3,  28 => 2,  11 => 1,);
    }
}
/* {% extends 'partials/base.html.twig' %}*/
/* {% block content %}*/
/* <article class="box post post-excerpt">*/
/*   <header>*/
/*     <h2>{{ page.header.title }}</h2>*/
/*   </header>*/
/*   {{ content }}*/
/*   {% include "forms/form.html.twig" %}*/
/* </article>*/
/* {% endblock %}*/
/* */
