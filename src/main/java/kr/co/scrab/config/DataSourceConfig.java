package kr.co.scrab.config;



import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.jdbc.datasource.LazyConnectionDataSourceProxy;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

//@Configuration
//@EnableTransactionManagement
public class DataSourceConfig{
	
	@Bean(name = "config")
    @ConfigurationProperties(prefix = "spring.datasource")  
	public HikariConfig hikariConfig_audeum() {
	    return new HikariConfig();
	}


	@Bean(name = "dataSource")
	@Qualifier("dataSource")
	public DataSource dataSource() {
        HikariDataSource dataSource = new HikariDataSource(hikariConfig_audeum());

        return new LazyConnectionDataSourceProxy(dataSource);
	}
	
	@Bean(name="transactionManager")
	public DataSourceTransactionManager transactionManager(@Autowired @Qualifier("dataSource") DataSource dataSource) {
	    return new DataSourceTransactionManager(dataSource);
	}
	
	
	@Bean(name = "dataSourceJdbcTemplate")
	@Primary
	public NamedParameterJdbcTemplate dataSourceJdbcTemplate(@Qualifier("dataSource") DataSource dataSource, ApplicationContext applicationContext) throws Exception {
		NamedParameterJdbcTemplate namedParameterJdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
	
	    return namedParameterJdbcTemplate;
	}
}