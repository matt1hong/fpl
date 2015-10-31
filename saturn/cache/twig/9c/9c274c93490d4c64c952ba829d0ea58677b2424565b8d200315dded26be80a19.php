<?php

/* partials/navigation.html.twig */
class __TwigTemplate_65c51942a3d9aa4a0cbe93007219ae2343fb5ca31d99f4ab5ed07d980211d9ef extends Twig_Template
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
        echo "<nav id=\"navbar-1\" class=\"navbar item-nav navbar-right\">
    <ul>
        ";
        // line 3
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["pages"]) ? $context["pages"] : null), "children", array()));
        foreach ($context['_seq'] as $context["_key"] => $context["page"]) {
            // line 4
            echo "            ";
            if ($this->getAttribute($context["page"], "visible", array())) {
                // line 5
                echo "                ";
                $context["current_page"] = ((($this->getAttribute($context["page"], "active", array()) || $this->getAttribute($context["page"], "activeChild", array()))) ? ("active") : (""));
                // line 6
                echo "                <li class=\"";
                echo (isset($context["current_page"]) ? $context["current_page"] : null);
                echo "\">
                    <a href=\"";
                // line 7
                echo $this->getAttribute($context["page"], "url", array());
                echo "\">
                        ";
                // line 8
                echo $this->getAttribute($context["page"], "menu", array());
                echo "
                    </a>
                </li>
            ";
            }
            // line 12
            echo "        ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['page'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 13
        echo "        ";
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["site"]) ? $context["site"] : null), "menu", array()));
        foreach ($context['_seq'] as $context["_key"] => $context["mitem"]) {
            // line 14
            echo "            <li>
                <a href=\"";
            // line 15
            echo $this->getAttribute($context["mitem"], "link", array());
            echo "\">";
            echo $this->getAttribute($context["mitem"], "text", array());
            echo "</a>
            </li>
        ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['mitem'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 18
        echo "        ";
        if ($this->getAttribute($this->getAttribute($this->getAttribute((isset($context["config"]) ? $context["config"] : null), "plugins", array()), "feed", array()), "enabled", array())) {
            // line 19
            echo "            <li>
                <a href=\"";
            // line 20
            echo (isset($context["feed_url"]) ? $context["feed_url"] : null);
            echo ".rss\">Feed</a>
            </li>
        ";
        }
        // line 23
        echo "    </ul>
</nav>          ";
    }

    public function getTemplateName()
    {
        return "partials/navigation.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  86 => 23,  80 => 20,  77 => 19,  74 => 18,  63 => 15,  60 => 14,  55 => 13,  49 => 12,  42 => 8,  38 => 7,  33 => 6,  30 => 5,  27 => 4,  23 => 3,  19 => 1,);
    }
}
/* <nav id="navbar-1" class="navbar item-nav navbar-right">*/
/*     <ul>*/
/*         {% for page in pages.children %}*/
/*             {% if page.visible %}*/
/*                 {% set current_page = (page.active or page.activeChild) ? 'active' : '' %}*/
/*                 <li class="{{ current_page }}">*/
/*                     <a href="{{ page.url }}">*/
/*                         {{ page.menu }}*/
/*                     </a>*/
/*                 </li>*/
/*             {% endif %}*/
/*         {% endfor %}*/
/*         {% for mitem in site.menu %}*/
/*             <li>*/
/*                 <a href="{{ mitem.link }}">{{ mitem.text }}</a>*/
/*             </li>*/
/*         {% endfor %}*/
/*         {% if config.plugins.feed.enabled %}*/
/*             <li>*/
/*                 <a href="{{ feed_url }}.rss">Feed</a>*/
/*             </li>*/
/*         {% endif %}*/
/*     </ul>*/
/* </nav>          */
