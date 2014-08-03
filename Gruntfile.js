module.exports = function( grunt ) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
    	// 编译less
        less: {
        	options: {
				yuicompress: true,
				sourceMap: true,
                sourceMapBasepath: './css/css',
                sourceMapFilename: './css/css/school.css.map'
			},
            compile: {
				files: [
					{
						expand: true, //启用动态扩展
						cwd: './css/less', // css文件源的文件夹
						src: ['course.less', 'school.less'], // 匹配规则
						dest: './css/css/', //导出css和雪碧图的路径地址
						ext: '.min.css' // 导出的css名
					}
				]
			}
        },
        // 压缩css
		cssmin: {
			min: {
				files: [
					{
						expand: true,
						cwd: './css/css/',
						src: ['*.min.css'],
						dest: './css/css',
						ext: '.css'
					}
				]
			}
		},
		pngmin: {
			compile: {
				options: {
					ext: '.png',
					force:true,
					iebug: true //IE6
				},
				files: [
					{
						src: ['/img/*.png'],
						dest: 'img/pngmin'
					}
				]
			}
		},
        connect: {
            options: {
                port: 8080,
                livereload: 35731,
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    open: 'http://<%= connect.options.hostname %>:<%= connect.options.port %>/'
                }
            }
        },
        watch: {
        	files: './css/less/*.less',
            tasks: ['less','cssmin'],
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'  
                },
                files: [
                    'html/*',
                    'css/css/*',
                    'js/*'
                ]
            }
        },
    });

    grunt.registerTask('default', ['less', 'cssmin', 'connect', 'watch']);
}
