require 'yaml'


task :default => :server

desc "Check the links"
task :check_links  do
  require 'link_checker'
  jekyll "build"
  puts "Checking links; be patient...".yellow
  LinkChecker.new( :target => '_site' ).check_uris
end

desc "Clean up generated site"
task :clean do
  cleanup
end

desc "Build site with Jekyll"
task :build => :clean do
  compass
  jekyll
  FileUtils.rm_rf('_site/tools')
end

desc 'Start server with --auto'
task :server => :clean do
  puts "\nUse 'foreman start' to manage the server".red
  #compass
  #jekyll('--server --auto')
end

desc 'Run htmlcompressor on the HTML'
task :htmlcompressor do
  puts "Running htmlcompressor on the HTML"
  puts "- removing whitespace"
  puts "- removing html comments"
  puts "- compressing inline style/script tag contents"

  htmlcompressor_wrapper('_site', '--remove-quotes --compress-js --compress-css')
end

desc 'Optimize .png images using optipng'
task :optipng do
  optipng_wrapper('_site/images')
end

desc "Optimize .jpg images using jpegtran (libjpeg)"
task :optijpeg do
  jpegtran_wrapper('_site/images')
end

desc 'Optimize .js files'
task :jsminify do
  jsminify_wrapper('_site/javascripts')
end

desc 'Build and deploy'
task :deploy do
  puts "\nUmmm....we're deploying through github pages now. If this is surprising to you, keep reading".red

  puts "\nJust merge to the gh-pages branch, and push to github:".yellow
  puts "\n$ git push".green

  puts "\n\n Then just sit back and let our pals over at Github take care of the rest...".yellow

#task :deploy => [:build, :htmlcompressor, :optipng, :optijpeg, :jsminify] do
# task :deploy => [:build] do

  #data = YAML.load(File.read('_settings.yml'))
  #command = "rsync -rzh --perms -e 'ssh -p #{data['port']}' --group=slab --chmod=a+rwx,g+s --progress --delete _site/ #{data['username']}@#{data['domain']}:#{data['directory']}"

  #sh "#{command.to_s}"
end

desc 'JSHint, "a fork of JSLint for the real world"'
task :jshint do
  opts = "maxerr=25,eqeqeq=true"
  command = "java -jar tools/rhino.jar tools/fulljshint.js "

  Dir["javascripts/*.js"].each do |file|
    sh (command + file + " #{opts}")
    puts "JSHint Successfull"
  end

end

desc 'CSSLint'
task :csslint do
  opts = '' # http://csslint.net/about.html
  command = "java -jar tools/rhino.jar tools/csslint-rhino.js " 

  Dir["stylesheets/*.css"].each do |file|
    sh command + file
    puts "=" * 80
  end

  puts "CSSLint Done"
end

desc "Begin a new post"
task :new_post, :title do |t, args|
  require './plugins/titlecase.rb'
  args.with_defaults(:title => 'new-post')
  title = args.title
  filename = "_posts/#{Time.now.strftime('%Y-%m-%d')}-#{title.downcase.gsub(/&/,'and').gsub(/[,'":\?!\(\)\[\]]/,'').gsub(/[\W\.]/, '-').gsub(/-+$/,'')}.md"
  puts "Creating new post #{filename}"

  open(filename, 'w') do |post|
    system "mkdir -p _posts"
    post.puts "---"
    post.puts "layout: post"
    post.puts "title: \"#{title.gsub(/&/,'&amp;').titlecase}\""
    post.puts "date: #{Time.now.strftime('%Y-%m-%d %H:%M')}"
    post.puts "comments: true"
    post.puts "categories: "
    post.puts "---"
  end
end

desc "Create a new page in (filename)/index.md"
task :new_topic, :filename do |t, args|
  require './plugins/titlecase.rb'
  args.with_defaults(:filename => 'new-page')
  page_dir = 'topics'
  if args.filename =~ /(^.+\/)?([\w_-]+)(\.)?(.+)?/
    page_dir += $4 ? "/#{$1}" : "/#{$1}#{$2}/"
    name = $4 ? $2 : "index"
    extension = $4 || "md"
    filename = "#{name}.#{extension}"
    mkdir_p page_dir
    file = page_dir + filename
    title = $2.gsub(/[-_]/, ' ').titlecase
    puts "Creating new page: #{file}"
    open(file, 'w') do |page|
      page.puts "---"
      page.puts "layout: page"
      page.puts "title: \"#{title}\""
      page.puts "date: #{Time.now.strftime('%Y-%m-%d %H:%M')}"
      page.puts "comments: false"
      page.puts "sharing: true"
      page.puts "footer: true"
      page.puts "---"
      page.puts "# #{title}"
    end
  else
    puts "Syntax error: #{args.filename} contains unsupported characters"
  end
end

desc 'Check links for site already running on localhost:4000'
task :check_links do
  begin
    require 'anemone'
    root = 'http://localhost:4000/'
    Anemone.crawl(root, :discard_page_bodies => true) do |anemone|
      anemone.after_crawl do |pagestore|
        broken_links = Hash.new { |h, k| h[k] = [] }
        pagestore.each_value do |page|
          if page.code != 200
            referrers = pagestore.pages_linking_to(page.url)
            referrers.each do |referrer|
              broken_links[referrer] << page
            end
          end
        end
        broken_links.each do |referrer, pages|
          puts "#{referrer.url} contains the following broken links:"
          pages.each do |page|
            puts " HTTP #{page.code} #{page.url}"
          end
        end
      end
    end

  rescue LoadError
    abort 'Install anemone gem: gem install anemone'
  end
end

def cleanup
  sh 'rm -rf _site'
end

def jekyll(opts = '')
  sh 'bundle exec jekyll ' + opts
end

def compass(opts = '')
  sh 'compass compile -c config.rb --force ' + opts + ' && compass watch &'
end

def htmlcompressor_wrapper(directory, opts = "")
  command = "java -jar tools/htmlcompressor-1.4.3.jar "
  command += " " + opts

  htmlfiles = File.join("**", directory, "**", "*.html")

  Dir.glob(htmlfiles).each do |file|
    sh ( command + " " + file + " -o " + file )
  end
end

def jpegtran_wrapper(directory, opts='')
  command = "jpegtran -copy none -optimize -verbose "
  command += " " + opts

  Dir["#{directory}/*.jpg"].each do |file|
    sh command + " -outfile " + file + " " + file
  end
end


def optipng_wrapper(directory, opts ='')
  # fix for
  # http://sourceforge.net/tracker/?func=detail&aid=2671422&group_id=151404&atid=780916
  Dir["#{directory}/*.png"].each do |image|
    FileUtils.rm(image)
  end

  command_base = "optipng -dir #{directory} -o7 -q "

  Dir["images/*.png"].each do |image|
    sh command_base + image
  end
end

def jsminify_wrapper(directory, opts = '')
  command = "java -jar tools/yuicompressor-2.4.5.jar --line-break 4000 " + opts

  Dir["#{directory}/*.js"].each do |script|
    sh command + " -o " + script + " " + script
  end

end

class String
  def red
    colorize(self, 31)
  end

  def green
    colorize(self, 32)
  end

  def yellow
    colorize(self, 33)
  end

  def blue
    colorize(self, 34)
  end

  def colorize(text, color_code)
    "\033[#{color_code}m#{text}\033[0m"
  end
end
