require 'yaml'

task :default => :help

task :help do
  puts "This is what you can do here:".green
  system("rake -sT")
end

desc "Add a new post"
task :new_post, [:title] do |t, args|
  args.with_defaults(:title => 'new-post')

  author = Open3.popen3("git config user.name") {|stdin, stdout| stdout.read.chomp }

  title = args[:title]
  filename = make_filename(title)

  puts "Creating new post file #{filename}".green

  open(filename, 'wb') do |post|
    post.puts "---"
    post.puts "layout: post"
    post.puts "title: \"#{title}\""
    post.puts "author: \"#{author}\""
    post.puts "date: #{Time.now.strftime('%Y-%m-%d %H:%M')}"
    post.puts "comments: true"
    post.puts "category: blog"
    post.puts "---"
  end
end

def make_filename(title)
  clean = clean_title(title)
  "_posts/blog_posts/#{Time.now.strftime('%Y-%m-%d')}-#{clean}.md"
end

def clean_title(title)
  title.downcase.gsub(/&/, 'and').gsub(/[,'":\?!\(\)\[\]]/,'').gsub(/[\W\.]/, '-').gsub(/-+$/,'')
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
