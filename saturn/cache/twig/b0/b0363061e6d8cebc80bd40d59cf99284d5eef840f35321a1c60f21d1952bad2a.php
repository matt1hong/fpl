<?php

/* partials/blog_item.html.twig */
class __TwigTemplate_e6839f68483242e7577b796b2072dfd7f8f7b160e6d9c47b84138b135f60db20 extends Twig_Template
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
        echo "<div class=\"post\">
    ";
        // line 2
        if ($this->getAttribute($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "header", array()), "link", array())) {
            // line 3
            echo "        <a href=\"";
            echo $this->getAttribute($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "header", array()), "link", array());
            echo "\"><h1>";
            echo $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "title", array());
            echo "</h1></a>
        ";
        } else {
            // line 5
            echo "        <a href=\"";
            echo $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "url", array());
            echo "\"> <h1>";
            echo $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "title", array());
            echo "</h1></a>
    ";
        }
        // line 7
        echo "    <hr>
    <div class=\"in-content\">
        ";
        // line 9
        if (($this->getAttribute($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "header", array()), "continue_link", array()) === false)) {
            // line 10
            echo "            ";
            echo $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "content", array());
            echo "
            ";
            // line 11
            if ( !(isset($context["truncate"]) ? $context["truncate"] : null)) {
                // line 12
                echo "                ";
                $context["show_prev_next"] = true;
                // line 13
                echo "                ";
            }
            // line 14
            echo "                ";
        } elseif (((isset($context["truncate"]) ? $context["truncate"] : null) && ($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "summary", array()) != $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "content", array())))) {
            // line 15
            echo "                ";
            echo $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "summary", array());
            echo "
                <a class=\"read-more\" href=\"";
            // line 16
            echo $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "url", array());
            echo "\">Read more</a>
                ";
        } elseif (        // line 17
(isset($context["truncate"]) ? $context["truncate"] : null)) {
            // line 18
            echo "                ";
            echo call_user_func_array($this->env->getFilter('truncate')->getCallable(), array($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "content", array()), 550));
            echo "
                <a class=\"read-more\" href=\"";
            // line 19
            echo $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "url", array());
            echo "\">Read more</a>
                ";
        } else {
            // line 21
            echo "                ";
            echo $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "content", array());
            echo "
                ";
            // line 22
            $context["show_prev_next"] = true;
            // line 23
            echo "        ";
        }
        // line 24
        echo "
    </div>

    <div class=\"foot-post\">
        <div class=\"units-row\">
            <div class=\"unit-100\">
                <strong>Date: </strong>
                <span>";
        // line 31
        echo twig_date_format_filter($this->env, $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "date", array()));
        echo "</span> 
            </div>  
            ";
        // line 33
        if ($this->getAttribute($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "header", array()), "author", array())) {
            // line 34
            echo "                <div class=\"unit-100\">
                    <strong>Author: </strong>
                    <span>";
            // line 36
            echo $this->getAttribute($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "header", array()), "author", array());
            echo "</span>
                </div>
            ";
        }
        // line 39
        echo "            ";
        if ($this->getAttribute($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "taxonomy", array()), "tag", array())) {
            // line 40
            echo "                <div class=\"unit-100\">
                    <strong>Tags: </strong>
                    ";
            // line 42
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "taxonomy", array()), "tag", array()));
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
            foreach ($context['_seq'] as $context["_key"] => $context["tag"]) {
                // line 43
                echo "                        <a href=\"";
                echo (isset($context["base_url"]) ? $context["base_url"] : null);
                echo "/tag";
                echo $this->getAttribute($this->getAttribute((isset($context["config"]) ? $context["config"] : null), "system", array()), "param_sep", array());
                echo $context["tag"];
                echo "\">";
                echo $context["tag"];
                echo "</a>";
                if ( !$this->getAttribute($context["loop"], "last", array())) {
                    echo ", ";
                }
                echo "  
                    ";
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
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['tag'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 45
            echo "                </div>
            ";
        }
        // line 47
        echo "        </div>
    </div>

    ";
        // line 50
        if ((isset($context["show_prev_next"]) ? $context["show_prev_next"] : null)) {
            // line 51
            echo "        <p class=\"prev-next\">
            ";
            // line 52
            if ( !$this->getAttribute((isset($context["page"]) ? $context["page"] : null), "isLast", array())) {
                // line 53
                echo "                <a class=\"btn btn-black\" href=\"";
                echo $this->getAttribute($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "prevSibling", array()), "url", array());
                echo "\"><i class=\"fa fa-arrow-left\"></i> PREVIOUS</a>
            ";
            }
            // line 55
            echo "
            ";
            // line 56
            if ( !$this->getAttribute((isset($context["page"]) ? $context["page"] : null), "isFirst", array())) {
                // line 57
                echo "                <a class=\"btn btn-black\" href=\"";
                echo $this->getAttribute($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "nextSibling", array()), "url", array());
                echo "\">NEXT <i class=\"fa fa-arrow-right\"></i></a>
            ";
            }
            // line 59
            echo "        </p>
    ";
        }
        // line 61
        echo "</div>
";
    }

    public function getTemplateName()
    {
        return "partials/blog_item.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  206 => 61,  202 => 59,  196 => 57,  194 => 56,  191 => 55,  185 => 53,  183 => 52,  180 => 51,  178 => 50,  173 => 47,  169 => 45,  143 => 43,  126 => 42,  122 => 40,  119 => 39,  113 => 36,  109 => 34,  107 => 33,  102 => 31,  93 => 24,  90 => 23,  88 => 22,  83 => 21,  78 => 19,  73 => 18,  71 => 17,  67 => 16,  62 => 15,  59 => 14,  56 => 13,  53 => 12,  51 => 11,  46 => 10,  44 => 9,  40 => 7,  32 => 5,  24 => 3,  22 => 2,  19 => 1,);
    }
}
/* <div class="post">*/
/*     {% if page.header.link %}*/
/*         <a href="{{ page.header.link }}"><h1>{{ page.title }}</h1></a>*/
/*         {% else %}*/
/*         <a href="{{ page.url }}"> <h1>{{ page.title }}</h1></a>*/
/*     {% endif %}*/
/*     <hr>*/
/*     <div class="in-content">*/
/*         {% if page.header.continue_link is sameas(false) %}*/
/*             {{ page.content }}*/
/*             {% if not truncate %}*/
/*                 {% set show_prev_next = true %}*/
/*                 {% endif %}*/
/*                 {% elseif truncate and page.summary != page.content %}*/
/*                 {{ page.summary }}*/
/*                 <a class="read-more" href="{{ page.url }}">Read more</a>*/
/*                 {% elseif truncate %}*/
/*                 {{ page.content|truncate(550) }}*/
/*                 <a class="read-more" href="{{ page.url }}">Read more</a>*/
/*                 {% else %}*/
/*                 {{ page.content }}*/
/*                 {% set show_prev_next = true %}*/
/*         {% endif %}*/
/* */
/*     </div>*/
/* */
/*     <div class="foot-post">*/
/*         <div class="units-row">*/
/*             <div class="unit-100">*/
/*                 <strong>Date: </strong>*/
/*                 <span>{{ page.date|date() }}</span> */
/*             </div>  */
/*             {% if page.header.author %}*/
/*                 <div class="unit-100">*/
/*                     <strong>Author: </strong>*/
/*                     <span>{{ page.header.author }}</span>*/
/*                 </div>*/
/*             {% endif %}*/
/*             {% if page.taxonomy.tag %}*/
/*                 <div class="unit-100">*/
/*                     <strong>Tags: </strong>*/
/*                     {% for tag in page.taxonomy.tag %}*/
/*                         <a href="{{ base_url }}/tag{{ config.system.param_sep }}{{ tag }}">{{ tag }}</a>{% if not loop.last %}, {% endif %}  */
/*                     {% endfor %}*/
/*                 </div>*/
/*             {% endif %}*/
/*         </div>*/
/*     </div>*/
/* */
/*     {% if show_prev_next %}*/
/*         <p class="prev-next">*/
/*             {% if not page.isLast %}*/
/*                 <a class="btn btn-black" href="{{ page.prevSibling.url }}"><i class="fa fa-arrow-left"></i> PREVIOUS</a>*/
/*             {% endif %}*/
/* */
/*             {% if not page.isFirst %}*/
/*                 <a class="btn btn-black" href="{{ page.nextSibling.url }}">NEXT <i class="fa fa-arrow-right"></i></a>*/
/*             {% endif %}*/
/*         </p>*/
/*     {% endif %}*/
/* </div>*/
/* */
