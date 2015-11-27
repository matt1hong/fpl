<?php

/* blog.html.twig */
class __TwigTemplate_343478d4f4a27917e5cb37a0f8d0df91170e727510ac0c5c6e1043c816507b69 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        $this->loadTemplate("blog.html.twig", "blog.html.twig", 1, "201170040")->display($context);
        // line 30
        echo "

";
    }

    public function getTemplateName()
    {
        return "blog.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  21 => 30,  19 => 1,);
    }
}


/* blog.html.twig */
class __TwigTemplate_343478d4f4a27917e5cb37a0f8d0df91170e727510ac0c5c6e1043c816507b69_201170040 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("partials/base.html.twig", "blog.html.twig", 1);
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
        // line 3
        $context["collection"] = $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "collection", array(), "method");
        // line 4
        $context["base_url"] = $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "url", array());
        // line 5
        $context["feed_url"] = (isset($context["base_url"]) ? $context["base_url"] : null);
        // line 7
        if (((isset($context["base_url"]) ? $context["base_url"] : null) == "/")) {
            // line 8
            $context["base_url"] = "";
        }
        // line 11
        if (((isset($context["base_url"]) ? $context["base_url"] : null) == (isset($context["base_url_relative"]) ? $context["base_url_relative"] : null))) {
            // line 12
            $context["feed_url"] = (((isset($context["base_url"]) ? $context["base_url"] : null) . "/") . $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "slug", array()));
        }
        // line 1
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 15
    public function block_content($context, array $blocks = array())
    {
        // line 16
        echo "    ";
        if ($this->getAttribute($this->getAttribute($this->getAttribute((isset($context["config"]) ? $context["config"] : null), "plugins", array()), "breadcrumbs", array()), "enabled", array())) {
            // line 17
            echo "      ";
            $this->loadTemplate("partials/breadcrumbs.html.twig", "blog.html.twig", 17)->display($context);
            // line 18
            echo "    ";
        }
        // line 19
        echo "
    ";
        // line 20
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["collection"]) ? $context["collection"] : null));
        $context['loop'] = array(
          'parent' => $context['_parent'],
          'index0' => 0,
          'index'  => 1,
          'first'  => true,
        );
        if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof Countable)) {
            $length = count($context['_seq']);
            $context['loop']['revindex0'] = $length - 1;
            $context['loop']['revindex'] = $length;
            $context['loop']['length'] = $length;
            $context['loop']['last'] = 1 === $length;
        }
        foreach ($context['_seq'] as $context["_key"] => $context["child"]) {
            // line 21
            echo "      ";
            $this->loadTemplate("partials/blog_item.html.twig", "blog.html.twig", 21)->display(array_merge($context, array("page" => $context["child"], "truncate" => true)));
            // line 22
            echo "    ";
            ++$context['loop']['index0'];
            ++$context['loop']['index'];
            $context['loop']['first'] = false;
            if (isset($context['loop']['length'])) {
                --$context['loop']['revindex0'];
                --$context['loop']['revindex'];
                $context['loop']['last'] = 0 === $context['loop']['revindex0'];
            }
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['child'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 23
        echo "
    ";
        // line 24
        if (($this->getAttribute($this->getAttribute($this->getAttribute((isset($context["config"]) ? $context["config"] : null), "plugins", array()), "pagination", array()), "enabled", array()) && $this->getAttribute($this->getAttribute((isset($context["collection"]) ? $context["collection"] : null), "params", array()), "pagination", array()))) {
            // line 25
            echo "      ";
            $this->loadTemplate("partials/pagination.html.twig", "blog.html.twig", 25)->display(array_merge($context, array("pagination" => $this->getAttribute($this->getAttribute((isset($context["collection"]) ? $context["collection"] : null), "params", array()), "pagination", array()))));
            // line 26
            echo "    ";
        }
        // line 27
        echo "  ";
    }

    public function getTemplateName()
    {
        return "blog.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  145 => 27,  142 => 26,  139 => 25,  137 => 24,  134 => 23,  120 => 22,  117 => 21,  100 => 20,  97 => 19,  94 => 18,  91 => 17,  88 => 16,  85 => 15,  81 => 1,  78 => 12,  76 => 11,  73 => 8,  71 => 7,  69 => 5,  67 => 4,  65 => 3,  51 => 1,  21 => 30,  19 => 1,);
    }
}
/* {% embed 'partials/base.html.twig' %}*/
/* */
/*   {% set collection = page.collection() %}*/
/*   {% set base_url = page.url %}*/
/*   {% set feed_url = base_url %}*/
/* */
/*   {% if base_url == '/' %}*/
/*     {% set base_url = '' %}*/
/*   {% endif %}*/
/* */
/*   {% if base_url == base_url_relative %}*/
/*     {% set feed_url = base_url~'/'~page.slug %}*/
/*   {% endif  %}*/
/* */
/*   {% block content %}*/
/*     {% if config.plugins.breadcrumbs.enabled %}*/
/*       {% include 'partials/breadcrumbs.html.twig' %}*/
/*     {% endif %}*/
/* */
/*     {% for child in collection %}*/
/*       {% include 'partials/blog_item.html.twig' with {'page':child, 'truncate':true} %}*/
/*     {% endfor %}*/
/* */
/*     {% if config.plugins.pagination.enabled and collection.params.pagination %}*/
/*       {% include 'partials/pagination.html.twig' with {'pagination':collection.params.pagination} %}*/
/*     {% endif %}*/
/*   {% endblock %}*/
/* */
/* {% endembed %}*/
/* */
/* */
/* */
