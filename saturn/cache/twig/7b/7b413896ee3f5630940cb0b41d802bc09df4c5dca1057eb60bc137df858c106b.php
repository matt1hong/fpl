<?php

/* partials/pagination.html.twig */
class __TwigTemplate_42442a77b5e6349b9ec0f39f933c113904de2ae2c514c1b68c3d154316682533 extends Twig_Template
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
        if ((twig_length_filter($this->env, (isset($context["pagination"]) ? $context["pagination"] : null)) > 1)) {
            // line 2
            echo "    <div class=\"units-row\">
    <div class=\"unit-100\"> 
        <ul class=\"pagination\">
                ";
            // line 5
            if ($this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "hasPrev", array())) {
                // line 6
                echo "                    <li><a rel=\"prev\" href=\"";
                echo (isset($context["base_url"]) ? $context["base_url"] : null);
                echo $this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "params", array());
                echo $this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "prevUrl", array());
                echo "\">&laquo;</a></li>
                    ";
            } else {
                // line 8
                echo "                    <li><span>&laquo;</span></li>
                ";
            }
            // line 10
            echo "
                ";
            // line 11
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable((isset($context["pagination"]) ? $context["pagination"] : null));
            foreach ($context['_seq'] as $context["_key"] => $context["paginate"]) {
                // line 12
                echo "                    ";
                if ($this->getAttribute($context["paginate"], "isCurrent", array())) {
                    // line 13
                    echo "                        <li class=\"active\"><a href=\"#\">";
                    echo $this->getAttribute($context["paginate"], "number", array());
                    echo "</a></li>
                        ";
                } elseif ($this->getAttribute(                // line 14
$context["paginate"], "isInDelta", array())) {
                    // line 15
                    echo "                        <li><a href=\"";
                    echo (isset($context["base_url"]) ? $context["base_url"] : null);
                    echo $this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "params", array());
                    echo $this->getAttribute($context["paginate"], "url", array());
                    echo "\">";
                    echo $this->getAttribute($context["paginate"], "number", array());
                    echo "</a></li>
                        ";
                } elseif ($this->getAttribute(                // line 16
$context["paginate"], "isDeltaBorder", array())) {
                    // line 17
                    echo "                        <li>&hellip;</li>
                    ";
                }
                // line 19
                echo "
                ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['paginate'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 21
            echo "                ";
            if ($this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "hasNext", array())) {
                // line 22
                echo "                    <li><a rel=\"next\" href=\"";
                echo (isset($context["base_url"]) ? $context["base_url"] : null);
                echo $this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "params", array());
                echo $this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "nextUrl", array());
                echo "\">&raquo;</a></li>
                    ";
            } else {
                // line 24
                echo "                    <li><span>&raquo;</span></li>
                ";
            }
            // line 26
            echo "            </ul>
        </div>
</div>
";
        }
    }

    public function getTemplateName()
    {
        return "partials/pagination.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  94 => 26,  90 => 24,  82 => 22,  79 => 21,  72 => 19,  68 => 17,  66 => 16,  57 => 15,  55 => 14,  50 => 13,  47 => 12,  43 => 11,  40 => 10,  36 => 8,  28 => 6,  26 => 5,  21 => 2,  19 => 1,);
    }
}
/* {% if pagination|length > 1 %}*/
/*     <div class="units-row">*/
/*     <div class="unit-100"> */
/*         <ul class="pagination">*/
/*                 {% if pagination.hasPrev %}*/
/*                     <li><a rel="prev" href="{{ base_url }}{{ pagination.params }}{{ pagination.prevUrl }}">&laquo;</a></li>*/
/*                     {% else %}*/
/*                     <li><span>&laquo;</span></li>*/
/*                 {% endif %}*/
/* */
/*                 {% for paginate in pagination %}*/
/*                     {% if paginate.isCurrent %}*/
/*                         <li class="active"><a href="#">{{ paginate.number }}</a></li>*/
/*                         {% elseif paginate.isInDelta %}*/
/*                         <li><a href="{{ base_url }}{{ pagination.params }}{{ paginate.url }}">{{ paginate.number }}</a></li>*/
/*                         {% elseif paginate.isDeltaBorder %}*/
/*                         <li>&hellip;</li>*/
/*                     {% endif %}*/
/* */
/*                 {% endfor %}*/
/*                 {% if pagination.hasNext %}*/
/*                     <li><a rel="next" href="{{ base_url }}{{ pagination.params }}{{ pagination.nextUrl }}">&raquo;</a></li>*/
/*                     {% else %}*/
/*                     <li><span>&raquo;</span></li>*/
/*                 {% endif %}*/
/*             </ul>*/
/*         </div>*/
/* </div>*/
/* {% endif %}*/
/* */
