module Jekyll
  # Outputs an obfuscated email address string
  #
  # {% email Thomas Jefferson %}
  #   tj@virginia.edu
  # {% endemail %}
  #
  # <a class="email" href="&#109;ailto:&#116;&#106;&#0064;&#118;&#105;&#114;&#103;&#105;&#110;&#105;&#97;.&#101;&#100;&#117;">
  #   &#116;&#106;&#0064;&#118;&#105;&#114;&#103;&#105;&#110;&#105;&#97;.&#101;&#100;&#117;
  # </a
  # #

  class Email < Liquid::Block
    Syntax =  /([\w\s]+)/

    def initialize(tag_name, markup, tokens)
      @name = nil
      if markup =~ Syntax
        @name = $1
      end
      super
    end

    def render(context)
      output = super
      if @name.nil?
        '<a class="email" href="&#109;ailto:' + obscure_email(output.join).to_s + '">' + obscure_email(output.join).to_s + '</a>'
      else
         '<a class="email" href="&#109;ailto:' + obscure_email(output.join).to_s + '">' + @name + '</a>'
      end
    end

    private 
    def obscure_email(email)
      return nil if email.nil?
      lower = ('a'..'z').to_a
      upper = ('A'..'Z').to_a
      email.split('').map {|char|
        output = lower.index(char) + 97 if lower.include?(char)
        output = upper.index(char) + 65 if upper.include?(char)
        output ? "&##{output};" : (char == '@' ? '&#0064;' : char)
      }.join.to_s
    end


  end
end

Liquid::Template.register_tag('email', Jekyll::Email)
