# School
export PATH=$PATH:/usr/school/bin/
# Bocal
export PATH=$PATH:/usr/site/sbin:/usr/site/bin
# Heimdal
export PATH=$PATH:/usr/heimdal/sbin:/usr/heimdal/bin
# Eclipse
export PATH=$PATH:/usr/bin/eclipse
# Package
export PATH=$PATH:/usr/local/sbin:/usr/local/bin
# System
export PATH=$PATH:/usr/sbin:/usr/bin:/sbin:/bin
# Mongodb
export PATH=$PATH:/home/gaular_e/mongodb/mongodb-linux-x86_64-2.6.1/bin
 
export PAGER='less'
export EDITOR="emacs -nw"
 
# Path to your oh-my-zsh configuration.
ZSH=$HOME/.oh-my-zsh
 
# Set name of the theme to load.
# Look in ~/.oh-my-zsh/themes/
# Optionally, if you set this to "random", it'll load a random theme each
# time that oh-my-zsh is loaded.
ZSH_THEME="amuse"
 
# Example aliases
alias zshconfig="source ~/.zshrc"
alias ohmyzsh="source ~/.oh-my-zsh"
 
# Set to this to use case-sensitive completion
CASE_SENSITIVE="true"
 
# Comment this out to disable weekly auto-update checks
# DISABLE_AUTO_UPDATE="true"
 
# Uncomment following line if you want to disable colors in ls
# DISABLE_LS_COLORS="true"
 
# Uncomment following line if you want to disable autosetting terminal title.
# DISABLE_AUTO_TITLE="true"
 
# Uncomment following line if you want red dots to be displayed while waiting for completion
# COMPLETION_WAITING_DOTS="true"
 
# Which plugins would you like to load? (plugins can be found in ~/.oh-my-zsh/plugins/*)
# Custom plugins may be added to ~/.oh-my-zsh/custom/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse) 
plugins=(rvm screen mvn sublime dircycle debian encode64 common-aliases gem)
plugins+=(git git-extras github autojump compleat git-flow ruby gradle rsync)
plugins+=(cp colorize colored-man battery last-working-dir golang)
 
source $ZSH/oh-my-zsh.sh

################################
##                            ##
## Customize to your needs... ##
##                            ##
################################
alias gitlog='git log --graph --all --format=format:'\''%C(bold blue)%h%C(reset)' \
             ' - %C(bold cyan)%aD%C(reset) %C(bold green)(%ar)%C(reset)%C(bold yellow)' \
             '%d%C(reset)%n'\'''\'' %C(white)%s%C(reset) %C(bold white)— ' \
             '%an%C(reset)'\'' --abbrev-commit'
alias tube='display http://www.tfl.gov.uk/assets/downloads/standard-tube-map.gif'
alias j="jobs"
alias emacs="emacs -nw"
alias ne="emacs"
alias norme="norme -score -printline -nocheat"
alias ducks='du -hkcs *|sort -rn|head -20'
alias dskload="ps faux|awk '\$8 ~ /D/{print}'"
alias github="firefox \`git remote -v | grep github.com | grep fetch | cut -f2 | head -1 | sed 's/ (fetch)//' | sed 's/git:/http:/g'\`"
alias t="tree"
alias l='ls -la'
alias reload="source ~/.zshrc"
alias ls='ls --color'
alias l='clear && pwd && ls -l'
alias ll='ls --color -la'
alias la='ls --color -la'
alias cp='cp -v'
alias mv='mv -v'
alias rm='rm -v -i'
alias grep='grep --color=auto'
alias ocaml='rlwrap ocaml'
alias ocmal='ocaml'
alias cc='cc -W -Wall -Wextra -Werror'
alias mk='make && make clean'
alias cd='clear && cd'

###########################
##                       ##
## Setting ENV Variables ##
##                       ##
###########################
export EDITOR='emacs -nw'
export HISTFILE="$HOME/.history"
export LOGCHECK='60'
export MAILCHECK=0
export PAGER='less'
export WATCH='all'
export WATCHFMT='%n has %a %l from %m at %T'
export GREP_COLOR=31
export SVNKOALA='kscm@koala-rendus.epitech.net'

###################
##               ##
##  Proprierties ##
##               ##
###################

trash-rm() {
    gvfs-trash "$@"
}
 
pronounce() {
    if [ "${1}" ]; then
    wget -q http://ssl.gstatic.com/dictionary/static/sounds/de/0/${1}.mp3 && vlc --play-and-exit ${1}.mp3 && rm -rf ${1}.mp3
    fi
}
 
wikipedia() {
    if [ "${1}" ]
    then
    dig +short "${1}".wp.dg.cx TXT
    fi
}
 
mkcd()
{
    if [ ${1} ]
    then
    mkdir -p ${1}
    cd ${1}
    else
    echo "mkcd: No arguments given !"
    fi
}
 
epirepo()
{
    check_ret() {
    	if [ "$1" ]; then
           ret=$1
	   if [ "$ret" -eq "0" ]; then
	      echo "repository successfully created"
	   else
	      echo "repository not created"
	      return
	   fi    
        fi
    }
 
    print_usage() {
    	echo "\n$0 REPO_NAME [RIGHTS [LOGIN]]\n"
    }
 
    for f in "$@"; do
    	case f in
             -h)
		print_usage
		return
		;;
	esac
    done
 
    if [ "$1" ]
    then
	blih -u gaular_e repository create "$1"
    	check_ret $?
    	if [ "$2" ]; then
           blih -u gaular_e repository setacl "$1" "$2" r
	else
	    blih -u gaular_e repository setacl "$1" ramassage-tek r
	fi
	check_ret "$?"
	blih -u gaular_e repository getacl "$1"
	if [ "$3" ]; then
	   git clone "git:/$3/$1"
	else
	   git clone "git:/gaular_e/$1"
	fi
    else
	echo "epirepo: No arguments given" 1>&2
    	print_usage 1>&2
    fi
}
 
clean()
{
    SEARCH='.'
    if [ ${1} ]
    then
        SEARCH=${1}
    fi
    find ${SEARCH} \( -name "*~" -or -name ".*~" \) -exec rm -fv {} \;
}
 
extract () {
    while [ "$#" != "0" ]; do
    	if [ -f $1 ] ; then
           case $1 in
	        *.tar.bz2)   tar xjf $1     ;;
	   	*.tar.gz)    tar xzf $1     ;;
	     	*.tar.xz)    tar xJf $1     ;;
      	     	*.bz2)       bunzip2 $1     ;;
 	     	*.rar)       unrar e $1     ;;
	     	*.gz)        gunzip $1      ;;
	     	*.xz)        unxz $1        ;;
   	     	*.tar)       tar xf $1      ;;
	     	*.tbz2)      tar xjf $1     ;;
      	     	*.tgz)       tar xzf $1     ;;
	     	*.zip)       unzip $1       ;;
	     	*.Z)         uncompress $1  ;;
	     	*.7z)        7z x $1        ;;
	     	*)     echo "'$1' cannot be extracted via extract()" ;;
            esac
	else
	    echo "'$1' is not a valid file"
   	fi
    	shift
    done
}
 
export USER_NICKNAME="emeline gaulard"
 
export JAVA_HOME="/usr/lib/jvm/java-1.7.0-openjdk-amd64" # "/usr/lib/jvm/java-7-openjdk"
export ANDROID_HOME=/opt/android-sdk
 
export MAVEN_OPTS="-Xms512m -Xmx512m"
 
export PATH=$PATH:$HOME/.rvm/bin # Add RVM to PATH for scripting
 
[[ -s "$HOME/.rvm/scripts/rvm" ]] && source "$HOME/.rvm/scripts/rvm" 
 
export PATH=$PATH:/home/gaular_e/projects/script/
